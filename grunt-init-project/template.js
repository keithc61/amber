/*
 * grunt-init-amber
 * https://amber-lang.net/
 *
 * Copyright (c) 2013 Manfred Kroehnert, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a web application based on Amber Smalltalk.';

// Template-specific notes to be displayed before question prompts.
exports.notes = ' _Project title_ should be a human-readable title.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You need to have these installed globally via npm:' +
' _@ambers/cli_ and _grunt-cli_.' +
' Now, install project dependencies with _npm install_' +
' and recompile / prepare with _grunt default devel_.' +
' If you are running _amber init_, these two tasks are going to be performed for you now.' +
' Afterwards, start the development server with _amber serve_.' +
' Your application is then accessible via _http://localhost:4000/_';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {
    var remembered = {};

    function rememberViaValidator(name) {
        var oldValidator = init.prompts[name].validator || function (line) {
                return true;
            };

        var newValidator;
        switch (oldValidator.length) { //apply would not work, .length is used to call it differently
            case 1:
                newValidator = function (line) {
                    remembered[name] = line;
                    return oldValidator.call(this, line);
                };
                break;
            case 2:
                newValidator = function (line, next) {
                    remembered[name] = line;
                    return oldValidator.call(this, line, next);
                };
                break;
            default:
                throw new Error("Panic: " + oldValidator.length + "-argument validator for " + name + ".");
        }

        init.prompts[name].validator = newValidator;
    }

    function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    init.prompts.name.message = 'Main class and package of Amber application.\nProject name is derived by lowercasing this.';
    init.prompts.name.validator = function (line) {
        return /^[A-Z][A-Za-z0-9]*$/.test(line)
    };
    init.prompts.name.warning = 'Must be a valid class name: only alphanumeric and starting with an uppercase letter!';
    rememberViaValidator('name');
    rememberViaValidator('title');

    init.process({type: 'amber'}, [
        // Prompt for these values.
        init.prompt('title', 'Application or Library Title'),
        init.prompt('name', function (value, data, done) {
            var words = remembered.title.split(/\W/);
            words = words.filter(function (x) {
                return x && x !== "none";
            }).map(capitalize);
            value = words.length ? words.join('') : 'MysteriousApp';
            done(null, value);
        }),
        init.prompt('description', 'The Application or The Library doing The Thing.'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        {
            name: 'namespace',
            message: 'Namespace of the new Amber package.',
            altDefault: function (value, data, done) {
                value = 'amber-' + remembered.name.toLowerCase();
                done(null, value);
            },
            validator: /^[a-z][a-z0-9/\-]*$/,
            warning: 'Only lowercase letters, numbers, and - are allowed in namespaces!'
        },
        init.prompt('version'),
        init.prompt('repository'),
        init.prompt('homepage'),
        init.prompt('bugs'),
        init.prompt('author_url'),
        init.prompt('licenses', 'MIT')
    ], function (err, props) {
        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Add properly-named license files.
        init.addLicenseFiles(files, props.licenses);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props, {noProcess: 'libs/**'});

        // Clean up non-npm props.
        delete props.namespace;

        props.name = props.name.toLowerCase();

        // A few additional properties.
        props.keywords = ['Amber', 'Smalltalk'];
        props.dependencies = {
            "@ambers/contrib-jquery": "^0.6.0",
            "@ambers/contrib-web": "^0.8.2",
            "@ambers/domite": "^0.9.0",
            "@ambers/lang": "^0.28.0",
            "@ambers/silk": "^0.6.0",
            "es6-promise": "^4.2.6"
        };
        props.devDependencies = {
            "@ambers/contrib-legacy": "^0.10.1",
            "@ambers/helios": "^0.12.2",
            "@ambers/ide-starter-modal": "^0.2.0",
            "@ambers/sdk": "^0.12.1",
            "grunt": "^1.0.3",
            "grunt-contrib-clean": "^1.1.0",
            "grunt-contrib-requirejs": "^1.0.0",
            "grunt-exec": "^3.0.0",
            "requirejs": "^2.3.5"
        };
        props.node_version = '>=4.0.0';
        props.scripts = {
            "reset": "npm run clean && npm run init",
            "clean": "(rm -rf node_modules || rd /s/q node_modules)",
            "init": "npm install && grunt default devel",
            "test": "grunt test"
        };

        // Generate package.json file, used by npm and grunt.
        init.writePackageJSON('package.json', props);

        // All done!
        done();
    });

};
