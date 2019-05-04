"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var push_event_1 = require("./push-event");
var get_navigation_timing_1 = require("./utils/get-navigation-timing");
exports.beaconApi = {
    performanceTiming: '/beacon/performance_timing',
};
function createInspector(inspectorConfig) {
    var server = inspectorConfig.server, appId = inspectorConfig.appId;
    var eventHandler = push_event_1.createEventHandler(server, appId);
    // const nativeControlError = console.error
    // window.console.error = (message?: any, optionalParams?: any[]) => {
    //   nativeControlError(message, optionalParams)
    //   eventHandler.push('/api/v1/beacon/wpf_console_err', message)
    // }
    // window.onerror = (message: any) => {
    //   eventHandler.push('/api/v1/beacon/wpf_window_err', message)
    // }
    window.onload = function () {
        eventHandler.push(exports.beaconApi.performanceTiming, get_navigation_timing_1.getNavigationTiming());
    };
}
exports.default = createInspector;
//# sourceMappingURL=create-inspector.js.map