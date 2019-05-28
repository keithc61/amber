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

    var polyfillThenPromiseApp = function () {
        define(["require", "amber/es6-promise"], function (require, promiseLib) {
            promiseLib.polyfill();
            return new Promise(function (resolve, reject) {
                require(["__app__"], resolve, reject);
            });
        });
    };

    var polyfillThenLambdaApp = function () {
        define(["require" /*, possible polyfill libs*/], function (require) {
            /* possible polyfill calls*/

            var amberPromised = new Promise(function (resolve, reject) {
                require(["__app__"], resolve, reject);
            });

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
        });
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
                jsGlobals: ['fetch'], // code calling the backend needs this atm
                libraries: ['amber/core/SUnit', 'amber/web/Web', 'silk/Silk']
            }
        },

        amdconfig: {app: {dest: 'config.js'}},

        requirejs: {
            options: {
                useStrict: true
            },
            deploy: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "helios/index": "",
                        "app": '(' + polyfillThenPromiseApp + '());',
                        "__app__": 'define(["deploy", "amber/core/Platform-Browser"],function(x){return x});'
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
                    mainConfigFile: "config.js",
                    rawText: {
                        "app": '(' + polyfillThenPromiseApp + '());',
                        "__app__": 'define(["devel", "amber/core/Platform-Browser"],function(x){return x});'
                    },
                    include: ['config', 'node_modules/requirejs/require', 'app', '__app__'],
                    exclude: ['devel', 'amber/core/Platform-Browser'],
                    out: "the.js"
                }
            },
            deploy_lambda: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "helios/index": "",
                        "app": '(' + polyfillThenLambdaApp + '());',
                        "__app__": "(" + function () {
                            define(["lambda", "amber/core/Platform-Node"], function (amber) {
                                return amber.initialize().then(function () {
                                    return amber;
                                });
                            });
                        } + "());"
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
                    mainConfigFile: "config.js",
                    rawText: {
                        "jquery": "/* do not load in node test runner */",
                        "__app__": "(" + function () {
                            define(["testing", "amber/core/Platform-Node", "amber_devkit/NodeTestRunner"], function (amber) {
                                amber.initialize().then(function () {
                                    amber.globals.NodeTestRunner._main();
                                });
                            });
                        } + "());",
                        "app": "(" + polyfillThenPromiseApp + "());"
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
