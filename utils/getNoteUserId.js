"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoteUserId = void 0;
var _users_1 = require("../_mapped/_users");
var getNoteUserId = function (note) {
    var noteUserId = note.user.id;
    var userId = "ADMIN";
    var userOldId = noteUserId;
    if (noteUserId === 9) {
        userId = "24a01455-09a2-4a63-aee1-c3331dc48477";
        userOldId = 9;
    }
    _users_1.users.forEach(function (user) {
        if (user.oldId === noteUserId) {
            userId = user.id;
            userOldId = user.oldId;
        }
    });
    return {
        id: userId,
        oldId: userOldId,
    };
};
exports.getNoteUserId = getNoteUserId;
