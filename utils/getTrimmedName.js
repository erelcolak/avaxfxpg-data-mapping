"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrimmedName = void 0;
var getTrimmedName = function (name) {
    return name.split(" ").slice(0, -1).join(" ").trim();
};
exports.getTrimmedName = getTrimmedName;
