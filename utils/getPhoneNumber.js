"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhoneNumber = void 0;
var getPhoneNumber = function (customer) {
    return customer.phoneNumberList[0].phoneNumber;
};
exports.getPhoneNumber = getPhoneNumber;
