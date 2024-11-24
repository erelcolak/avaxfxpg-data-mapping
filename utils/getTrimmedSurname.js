"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrimmedSurname = void 0;
var getTrimmedSurname = function (name) {
    return name.split(" ").slice(-1).join(" ").trim();
};
exports.getTrimmedSurname = getTrimmedSurname;
