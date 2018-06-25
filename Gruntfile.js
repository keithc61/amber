var path = require('path');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-exec');

    grunt.loadTasks('./internal/grunt-tasks');
    grunt.loadTasks('./external/amber-dev/tasks');

    var helpers = require('./external/amber-dev').helpers;

    grunt.registerTask('default', ['peg', 'build:all']);
    grunt.registerTask('build:all', ['amberc:amber', 'build:cli', 'amberc:dev']);
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
                src: 'support/parser.pegjs',
                dest: 'support/parser.js'
            }
        },

        amdconfig: {amber: {dest: 'config.js'}},

        amberc: {
            options: {
                amber_dir: process.cwd(),
                closure_jar: ''
            },
            amber: {
                output_dir: 'src',
                src: ['src/Kernel-Helpers.st',
                    'src/Kernel-Objects.st', 'src/Kernel-Classes.st', 'src/Kernel-Methods.st', 'src/Kernel-Collections.st',
                    'src/Kernel-Infrastructure.st', 'src/Kernel-Promises.st', 'src/Kernel-Exceptions.st', 'src/Kernel-Announcements.st',
                    'src/Platform-Services.st', 'src/Platform-ImportExport.st', 'src/Platform-Browser.st', 'src/Platform-Node.st',
                    'src/Platform-DOM.st',
                    'src/Kernel-Dag.st', 'src/Compiler-Core.st', 'src/Compiler-AST.st',
                    'src/Compiler-IR.st', 'src/Compiler-Inlining.st', 'src/Compiler-Semantic.st', 'src/Compiler-Interpreter.st',
                    'src/SUnit.st',
                    'src/Kernel-Tests.st', 'src/Compiler-Tests.st', 'src/Platform-DOM-Tests.st', 'src/SUnit-Tests.st'
                ],
                jsGlobals: ['navigator']
            },
            cli: {
                output_dir: 'external/amber-cli/src',
                src: ['external/amber-cli/src/AmberCli.st'],
                amd_namespace: 'amber_cli'
            },
            dev: {
                output_dir: 'external/amber-dev/lib',
                src: ['external/amber-dev/lib/NodeTestRunner.st'],
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
                    out: "external/amber-cli/support/amber-cli.js"
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
            amber: ['src/*.js', 'support/*.js'],
            cli: ['external/amber-cli/src/*.js', 'external/amber-cli/support/*.js'],
            dev: ['external/amber-dev/lib/*.js'],
            grunt: ['Gruntfile.js', 'internal/grunt-tasks/*.js', 'external/amber-dev/tasks/*.js']
        }
    });
};
