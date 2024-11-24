"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoleIdByOldId = void 0;
var fs = require("fs");
var constants_1 = require("../constants");
var getRoleIdByOldId = function (oldId) {
    var rawData = fs.readFileSync("".concat(constants_1.mappedFolder).concat(constants_1.rolesFolder, "index.json"));
    var parsedData = JSON.parse(rawData.toString());
    var obj = parsedData.find(function (item) { return item.oldId === oldId; });
    return obj["_id"];
};
exports.getRoleIdByOldId = getRoleIdByOldId;
