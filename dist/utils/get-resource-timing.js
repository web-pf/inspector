"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResourceTiming = function () {
    return performance.getEntriesByType('resource').filter(function (item) {
        if (item.name.includes('monitor_ignore=true')) {
            return false;
        }
        return true;
    });
};
//# sourceMappingURL=get-resource-timing.js.map