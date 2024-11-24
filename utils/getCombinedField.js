"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCombinedField = void 0;
var getTrimmedName_1 = require("./getTrimmedName");
var getTrimmedSurname_1 = require("./getTrimmedSurname");
var getCombinedField = function (name) {
    var _name = (0, getTrimmedName_1.getTrimmedName)(name);
    var _surname = (0, getTrimmedSurname_1.getTrimmedSurname)(name);
    var turkishChars = [
        "ı",
        "İ",
        "ü",
        "Ü",
        "ö",
        "Ö",
        "ş",
        "Ş",
        "ç",
        "Ç",
        "ğ",
        "Ğ",
    ];
    var englishChars = [
        "i",
        "I",
        "u",
        "U",
        "o",
        "O",
        "s",
        "S",
        "c",
        "C",
        "g",
        "G",
    ];
    var fullName = (_name + _surname).replace(/\s/g, "");
    turkishChars.forEach(function (charTR, index) {
        fullName = fullName.replace(new RegExp(charTR, "g"), englishChars[index]);
    });
    fullName = fullName.replace(/[0-9\W_]+/g, "");
    fullName = fullName.toLowerCase();
    return fullName;
};
exports.getCombinedField = getCombinedField;
