"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNavigationTiming = function () {
    // experimental API, IE is not supported
    var navigationPf = window.performance.getEntriesByType('navigation');
    if (navigationPf.length) {
        return navigationPf[0];
        // if not supported, use timing api.
    }
    else
        return window.performance.timing;
};
//# sourceMappingURL=get-navigation-timing.js.map