module.exports = function (grunt) {

    var PEG = require('pegjs');

    /**
     Full config looks like this:
     pegjs: {
     my_parser: {
     options: {                       // optional
     cache: true,                   // default: false
     export_var: 'smalltalk.parser' // default: module.exports
     },
   */
    grunt.registerMultiTask('peg', 'Generate JavaScript parser from PEG.js grammar description', function () {
        var options = this.options({
            cache: false,
            output: 'source',
            export_var: 'module.exports'
        });
        var parser = PEG.buildParser(grunt.file.read(this.data.src), options);
        var content = "// jshint ignore:start\ndefine(['./boot'], function($boot) {\nvar $globals = $boot.globals;\n" + options.export_var + " = " + parser + ";\n});";
        grunt.file.write(this.data.dest, content);
    });
};
