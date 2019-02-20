define([
    './lang',
    './brikz', // pre-fetch, dep of ./boot
    './kernel-checks', // pre-fetch, dep of ./boot
    './kernel-fundamentals', // pre-fetch, dep of ./boot
    './kernel-language', // pre-fetch, dep of ./boot
    './boot', // pre-fetch, class loader
    './deploy', // pre-fetch, dep of ./lang
    // --- packages of the development only Amber begin here ---
    'amber/core/Platform-DOM',
    'amber/core/SUnit',
    'amber/core/Compiler-Tests',
    'amber/core/Kernel-Tests',
    'amber/core/Platform-DOM-Tests',
    'amber/core/SUnit-Tests'
    // --- packages of the development only Amber end here ---
], function (amber) {
    return amber;
});
