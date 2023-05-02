"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformUrl = void 0;
function transformUrl(url) {
    var ans = "";
    for (var key = 0; key < url.length; key++) {
        if (url[key] === "\\") {
            ans += "\\\\";
        }
        else {
            ans += url[key];
        }
    }
    return ans;
}
exports.transformUrl = transformUrl;
