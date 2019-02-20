define([
    './helpers',
    './boot', // pre-fetch, dep of ./helpers
    // --- packages of the core Amber begin here ---
    'amber/core/Kernel-Helpers',
    'amber/core/Kernel-Objects',
    'amber/core/Kernel-Classes',
    'amber/core/Kernel-Methods',
    'amber/core/Kernel-Collections',
    'amber/core/Kernel-Dag',
    'amber/core/Kernel-Infrastructure',
    'amber/core/Kernel-Promises',
    'amber/core/Kernel-Exceptions',
    'amber/core/Kernel-Announcements',
    'amber/core/Platform-Services',
    // --- packages of the core Amber end here ---
], function (amber) {
    return amber;
});
