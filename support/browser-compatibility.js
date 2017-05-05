// TODO remove

/* Make sure that console is defined */
if(typeof console === "undefined") {
    this.console = {
        dir: function() {},
        log: function() {},
        warn: function() {},
        info: function() {},
        debug: function() {},
        error: function() {}
    };
}
