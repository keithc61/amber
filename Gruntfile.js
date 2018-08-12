var path = require('path');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-exec');

    grunt.loadTasks('./grunt-tasks');
    grunt.loadTasks('./sdk/tasks');

    var helpers = require('./sdk').helpers;

    grunt.registerTask('default', ['peg', 'build:all']);
    grunt.registerTask('build:all', ['amberc:lang', 'amberc:tests', 'build:cli', 'amberc:dev']);
    grunt.registerTask('build:cli', ['amberc:cli', 'amdconfig', 'requirejs:cli']);
    grunt.registerTask('test', ['amdconfig', 'requirejs:test_runner', 'exec:test_runner', 'clean:test_runner']);
    grunt.registerTask('devel', ['amdconfig']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        meta: {
            banner: '/*!\n <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n License: <%= pkg.license.type %> \n*/\n'
        },

        peg: {
            parser: {
                options: {
                    cache: true,
                    export_var: '$globals.SmalltalkParser'
                },
                src: 'lang/support/parser.pegjs',
                dest: 'lang/support/parser.js'
            }
        },

        amdconfig: {amber: {dest: 'config.js'}},

        amberc: {
            options: {
                amber_dir: path.join(process.cwd(), "lang"),
                closure_jar: ''
            },
            lang: {
                output_dir: 'lang/src',
                src: ['lang/src/Kernel-Helpers.st',
                    'lang/src/Kernel-Objects.st', 'lang/src/Kernel-Classes.st', 'lang/src/Kernel-Methods.st', 'lang/src/Kernel-Collections.st',
                    'lang/src/Kernel-Infrastructure.st', 'lang/src/Kernel-Promises.st', 'lang/src/Kernel-Exceptions.st', 'lang/src/Kernel-Announcements.st',
                    'lang/src/Platform-Services.st', 'lang/src/Platform-ImportExport.st', 'lang/src/Platform-Browser.st', 'lang/src/Platform-Node.st',
                    'lang/src/Platform-DOM.st',
                    'lang/src/Kernel-Dag.st', 'lang/src/Compiler-Core.st', 'lang/src/Compiler-AST.st',
                    'lang/src/Compiler-IR.st', 'lang/src/Compiler-Inlining.st', 'lang/src/Compiler-Semantic.st', 'lang/src/Compiler-Interpreter.st',
                    'lang/src/SUnit.st'
                ],
                jsGlobals: ['navigator']
            },
            tests: {
                output_dir: 'lang/src',
                src: ['lang/src/Kernel-Tests.st', 'lang/src/Compiler-Tests.st', 'lang/src/Platform-DOM-Tests.st', 'lang/src/SUnit-Tests.st'],
                libraries: ['amber_core/SUnit'],
                jsGlobals: ['navigator']
            },
            cli: {
                output_dir: 'cli/src',
                src: ['cli/src/AmberCli.st'],
                amd_namespace: 'amber_cli'
            },
            dev: {
                output_dir: 'sdk/lib',
                src: ['sdk/lib/NodeTestRunner.st'],
                amd_namespace: 'amber_devkit'
            }
        },

        requirejs: {
            options: {
                useStrict: true
            },
            cli: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "__app__": "(" + function () {
                            define(["amber/devel", "amber_core/Platform-Node", "amber_cli/AmberCli"], function (amber) {
                                amber.initialize().then(function () {
                                    amber.globals.AmberCli._main();
                                });
                            });
                        } + "());",
                        "app": "(" + function () {
                            define(["require", "amber/es2015-polyfills"], function (require) {
                                require(["__app__"]);
                            });
                        } + "());"
                    },
                    pragmas: {
                        // none, for repl to have all info
                    },
                    include: ['app', 'amber/lazypack', '__app__'],
                    insertRequire: ['app'],
                    optimize: "none",
                    wrap: helpers.nodeWrapperWithShebang,
                    out: "cli/support/amber-cli.js"
                }
            },
            test_runner: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "__app__": "(" + function () {
                            define(["amber/devel", "amber_core/Platform-Node", "amber_devkit/NodeTestRunner"], function (amber) {
                                amber.initialize().then(function () {
                                    amber.globals.NodeTestRunner._main();
                                });
                            });
                        } + "());",
                        "app": "(" + function () {
                            define(["require", "amber/es2015-polyfills"], function (require) {
                                require(["__app__"]);
                            });
                        } + "());"
                    },
                    paths: {"amber_devkit": helpers.libPath},
                    pragmas: {
                        // none, amber tests test contexts as well as eg. class copying which needs sources
                    },
                    include: ['app', 'amber/lazypack', '__app__'],
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
        },

        jshint: {
            amber: ['lang/src/*.js', 'lang/support/*.js'],
            cli: ['cli/src/*.js', 'cli/support/*.js'],
            dev: ['sdk/lib/*.js'],
            grunt: ['Gruntfile.js', 'grunt-tasks/*.js', 'sdk/tasks/*.js']
        }
    });
};
