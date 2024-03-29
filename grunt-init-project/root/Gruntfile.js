'use strict';

module.exports = function (grunt) {
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('@ambers/sdk');

    var path = require('path'),
        helpers = require('@ambers/sdk').helpers;

    // Default task.
    grunt.registerTask('default', ['amdconfig:app', 'amberc:all']);
    grunt.registerTask('test', ['amdconfig:app', 'requirejs:test_runner', 'exec:test_runner', 'clean:test_runner']);
    grunt.registerTask('devel', ['amdconfig:app', 'requirejs:devel']);
    grunt.registerTask('deploy', ['amdconfig:app', 'requirejs:deploy']);
    grunt.registerTask('deploy:lambda', ['amdconfig:app', 'requirejs:deploy_lambda']);

    var id = function (x) {
        return x
    };

    function mkDefine (deps, cb) {
        return "define(" + JSON.stringify(deps) + "," + cb + ");"
    }

    var cbRequireAndPromiseMain = function (require) {
        return new Promise(function (resolve, reject) {
            require(["app/main"], resolve, reject);
        });
    };

    var lambdaExports = function (amberPromised) {
        return function (className) {
            var worker, workerPromise = amberPromised.then(function (amber) {
                worker = amber.globals[className]._new();
            });
            return function (selector) {
                var jsSelector, jsSelectorPromise = amberPromised.then(function (amber) {
                    jsSelector = amber.api.st2js(selector);
                });
                var readyPromise = Promise.all([workerPromise, jsSelectorPromise]);
                return function (event, context) {
                    return readyPromise.then(function () {
                        return worker[jsSelector](event, context);
                    });
                };
            };
        };
    };

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        // pkg: grunt.file.readJSON('{%= amberjson %}'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // task configuration
        amberc: {
            options: {
                amber_dir: path.join(__dirname, "node_modules", "@ambers", "lang"),
                configFile: "config.js"
            },
            all: {
                src: [
                    'src/{%= name %}.st', 'src/{%= name %}-Backend.st', // list all sources in dependency order
                    'src/{%= name %}-Tests.st' // list all tests in dependency order
                ],
                amd_namespace: '{%= namespace %}',
                libraries: ['amber/core/SUnit', 'amber/web/Web', 'silk/Silk']
            }
        },

        amdconfig: {app: {dest: 'config.js'}},

        requirejs: {
            options: {
                mainConfigFile: "config.js",
                paths: {
                    "es6-promise/auto": "node_modules/es6-promise/dist/es6-promise.auto"
                },
                useStrict: true
            },
            deploy: {
                options: {
                    rawText: {
                        "helios/index": "",
                        "app": mkDefine(["require", "es6-promise/auto"], cbRequireAndPromiseMain),
                        "app/main": mkDefine(["deploy", "amber/core/Platform-Browser"], id)
                    },
                    pragmas: {
                        excludeIdeData: true,
                        excludeDebugContexts: true
                    },
                    include: ['config', 'node_modules/requirejs/require', 'app'],
                    findNestedDependencies: true,
                    exclude: ['helios/index'],
                    optimize: "uglify2",
                    out: "the.js"
                }
            },
            devel: {
                options: {
                    rawText: {
                        "app": mkDefine(["require", "es6-promise/auto"], cbRequireAndPromiseMain),
                        "app/main": mkDefine(["devel", "amber/core/Platform-Browser"], id)
                    },
                    include: ['config', 'node_modules/requirejs/require', 'app', 'app/main'],
                    exclude: ['devel', 'amber/core/Platform-Browser'],
                    out: "the.js"
                }
            },
            deploy_lambda: {
                options: {
                    rawText: {
                        "helios/index": "",
                        "app": mkDefine(["app/main"], lambdaExports),
                        "app/main": mkDefine(["lambda", "amber/core/Platform-Node"], function (amber) {
                            return amber.initialize().then(function () {
                                return amber;
                            });
                        })
                    },
                    pragmas: {
                        excludeIdeData: true,
                        excludeDebugContexts: true
                    },
                    include: ['app'],
                    findNestedDependencies: true,
                    exclude: ['helios/index'],
                    wrap: {start: helpers.nodeWrapper.start, end: "return require('app');" + helpers.nodeWrapper.end},
                    optimize: "uglify2",
                    out: "lambda/the.js"
                }
            },
            test_runner: {
                options: {
                    rawText: {
                        "jquery": "/* do not load in node test runner */",
                        "app": mkDefine(["testing", "amber/core/Platform-Node", "amber_devkit/NodeTestRunner"], function (amber) {
                            amber.initialize().then(function () {
                                amber.globals.NodeTestRunner._main();
                            });
                        })
                    },
                    paths: {"amber_devkit": helpers.libPath},
                    pragmas: {
                        excludeIdeData: true
                    },
                    include: ['app'],
                    findNestedDependencies: true,
                    insertRequire: ['app'],
                    optimize: "none",
                    wrap: helpers.nodeWrapperWithShebang,
                    out: "test_runner.js"
                }
            }
        },

        exec: {
            test_runner: 'node test_runner.js'
        },

        clean: {
            test_runner: ['test_runner.js']
        }
    });

};
