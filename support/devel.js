define([
    './lang',
    './compatibility', // pre-fetch, dep of ./boot
    './boot', // pre-fetch, dep of ./helpers
    './helpers', // pre-fetch, dep of ./deploy
    './deploy', // pre-fetch, dep of ./lang
    // --- packages of the development only Amber begin here ---
    'amber_core/SUnit',
    'amber_core/Compiler-Tests',
    'amber_core/Kernel-Tests',
    'amber_core/SUnit-Tests'
    // --- packages of the development only Amber end here ---
], function (amber) { return amber; });
