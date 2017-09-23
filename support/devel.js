define([
    './lang',
    './brikz', // pre-fetch, dep of ./boot
    './kernel-checks', // pre-fetch, dep of ./boot
    './kernel-fundamentals', // pre-fetch, dep of ./boot
    './kernel-language', // pre-fetch, dep of ./boot
    './boot', // pre-fetch, class loader
    './deploy', // pre-fetch, dep of ./lang
    // --- packages of the development only Amber begin here ---
    'amber_core/Platform-DOM',
    'amber_core/SUnit',
    'amber_core/Compiler-Tests',
    'amber_core/Kernel-Tests',
    'amber_core/Platform-DOM-Tests',
    'amber_core/SUnit-Tests'
    // --- packages of the development only Amber end here ---
], function (amber) {
    return amber;
});
