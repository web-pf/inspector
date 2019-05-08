"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createEventHandler(server, appId) {
    return {
        push: function (name, payload) {
            var beaconData = new FormData();
            beaconData.append('appId', appId);
            beaconData.append('name', name);
            beaconData.append('record', JSON.stringify(payload));
            beaconData.append('timestamp', String(Date.now()));
            navigator.sendBeacon(server + '/beacon', beaconData);
        },
    };
}
exports.createEventHandler = createEventHandler;
//# sourceMappingURL=push-event.js.map