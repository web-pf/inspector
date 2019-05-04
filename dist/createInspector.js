"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pushEvent_1 = __importDefault(require("./pushEvent"));
exports.beaconApi = {
    performanceTiming: '/beacon/performance_timing',
};
function createInspector(inspectorConfig) {
    var server = inspectorConfig.server, appId = inspectorConfig.appId;
    var eventHandler = pushEvent_1.default(server, appId);
    // const nativeControlError = console.error
    // window.console.error = (message?: any, optionalParams?: any[]) => {
    //   nativeControlError(message, optionalParams)
    //   eventHandler.push('/api/v1/beacon/wpf_console_err', message)
    // }
    // window.onerror = (message: any) => {
    //   eventHandler.push('/api/v1/beacon/wpf_window_err', message)
    // }
    window.onload = function () {
        eventHandler.push(exports.beaconApi.performanceTiming, performance.getEntriesByType("navigation")[0]);
    };
}
exports.default = createInspector;
//# sourceMappingURL=createInspector.js.map