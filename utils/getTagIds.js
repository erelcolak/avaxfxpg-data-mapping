"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagIds = void 0;
var _tags_1 = require("../_mapped/_tags");
var getTagIds = function (customer) {
    var _tag = _tags_1.tags.find(function (tag) { return tag.oldId === customer.leadState.id; });
    return [_tag === null || _tag === void 0 ? void 0 : _tag.id];
};
exports.getTagIds = getTagIds;
