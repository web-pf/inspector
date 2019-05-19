"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var push_event_1 = require("./push-event");
var get_navigation_timing_1 = require("./utils/get-navigation-timing");
var get_resource_timing_1 = require("./utils/get-resource-timing");
function createInspector(inspectorConfig) {
    var server = inspectorConfig.server, appId = inspectorConfig.appId;
    var eventHandler = push_event_1.createEventHandler(server, appId);
    var nativeError = console.error;
    console.error = function (message) {
        var restOptions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOptions[_i - 1] = arguments[_i];
        }
        nativeError.apply(void 0, [message].concat(restOptions));
        eventHandler.push('error', {
            type: 'console_error',
            message: message,
        });
    };
    window.addEventListener('unhandledrejection', function (e) {
        var _a = e.reason, message = _a.message, stack = _a.stack;
        eventHandler.push('error', {
            type: 'promise_error',
            message: message,
            stack: stack,
        });
    });
    window.addEventListener('error', function (event) {
        var message = event.message, filename = event.filename, lineno = event.lineno, colno = event.colno, error = event.error;
        eventHandler.push('error', {
            type: 'window_error',
            message: message,
            filename: filename,
            lineno: lineno,
            colno: colno,
            stack: error.stack,
        });
    }, true);
    window.onload = function () {
        eventHandler.push('nav_timing', get_navigation_timing_1.getNavigationTiming());
        eventHandler.push('resource_timing', get_resource_timing_1.getResourceTiming());
    };
}
exports.default = createInspector;
//# sourceMappingURL=create-inspector.js.map