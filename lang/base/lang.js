define([
    './deploy',
    './boot', // pre-fetch, dep of ./helpers
    './helpers', // pre-fetch, dep of ./deploy
    './parser',
    // --- packages for the Amber reflection begin here ---
    'amber/core/Platform-ImportExport',
    'amber/core/Compiler-Core',
    'amber/core/Compiler-AST',
    'amber/core/Compiler-Semantic',
    'amber/core/Compiler-IR',
    'amber/core/Compiler-Inlining',
    'amber/core/Compiler-Interpreter'
    // --- packages for the Amber reflection end here ---
], function (amber) {
    return amber;
});
