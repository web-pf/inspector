"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectToFormData(obj) {
    var formdata = new FormData();
    Object.keys(obj).forEach(function (key) {
        formdata.append(key, JSON.stringify(obj[key]));
    });
    return formdata;
}
exports.default = objectToFormData;
//# sourceMappingURL=object2formdata.js.map