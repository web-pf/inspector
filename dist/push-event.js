"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createEventHandler(server, appId) {
    return {
        push: function (api, payload) {
            var beaconData = new FormData();
            beaconData.append('appId', appId);
            beaconData.append('record', JSON.stringify(payload));
            navigator.sendBeacon(server + api, beaconData);
        },
    };
}
exports.createEventHandler = createEventHandler;
//# sourceMappingURL=push-event.js.map