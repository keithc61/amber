var app = require('./the.js')('{%= name %}Backend');

exports.status = app('status');
exports.echo = app('echoEvent:andContext:');
