function nodeWrapper() {
    return {
        start: "(function(define, require){\n" +
        "define(function (requirejs) {\n" +
        "var module = void 0; // Bad UMDs workaround\n" +
        "requirejs.resolve = require.resolve;\n" +
        "require = requirejs;\n",
        end: "});\n" +
        "}((" +
        require("amdefine") +
        "(module)), require));"
    };
}

var SHEBANG = "#!/usr/bin/env node",
    WRAPPER = nodeWrapper(),
    WRAPPER_WITH_SHEBANG = nodeWrapper();

WRAPPER_WITH_SHEBANG.start = SHEBANG + "\n" + WRAPPER_WITH_SHEBANG.start;

module.exports = {
    libPath: __dirname,
    nodeShebang: SHEBANG,
    nodeWrapper: WRAPPER,
    nodeWrapperWithShebang: WRAPPER_WITH_SHEBANG
};
