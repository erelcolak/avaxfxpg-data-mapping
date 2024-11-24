"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatformId = void 0;
var getPlatformId = function (customer) {
    if (customer.metaAccountList && customer.metaAccountList[0].login) {
        return customer.metaAccountList[0].login;
    }
    else {
        return null;
    }
};
exports.getPlatformId = getPlatformId;
