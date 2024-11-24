"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoteTitle = void 0;
var getNoteTitle = function (note) {
    var trimmedNoteTitle = note.title.trim();
    if (trimmedNoteTitle === ".") {
        trimmedNoteTitle = "";
    }
    return trimmedNoteTitle;
};
exports.getNoteTitle = getNoteTitle;
