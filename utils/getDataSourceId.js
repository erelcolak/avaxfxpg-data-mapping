"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataSourceId = void 0;
var _dataSources_1 = require("../_mapped/_dataSources");
var getDataSourceId = function (customer) {
    var _a, _b, _c, _d;
    if (customer.source &&
        _dataSources_1.dataSources.find(function (dataSource) { return dataSource.name === customer.source; })) {
        return (_a = _dataSources_1.dataSources.find(function (dataSource) { return dataSource.name === customer.source; })) === null || _a === void 0 ? void 0 : _a.id;
    }
    else if (customer.source2 &&
        _dataSources_1.dataSources.find(function (dataSource) { return dataSource.name === customer.source2; })) {
        return (_b = _dataSources_1.dataSources.find(function (dataSource) { return dataSource.name === customer.source2; })) === null || _b === void 0 ? void 0 : _b.id;
    }
    else if (customer.source3 &&
        _dataSources_1.dataSources.find(function (dataSource) { return dataSource.name === customer.source3; })) {
        return (_c = _dataSources_1.dataSources.find(function (dataSource) { return dataSource.name === customer.source3; })) === null || _c === void 0 ? void 0 : _c.id;
    }
    else {
        return (_d = _dataSources_1.dataSources.find(function (dataSource) { return dataSource.name === "Diğer"; })) === null || _d === void 0 ? void 0 : _d.id;
    }
};
exports.getDataSourceId = getDataSourceId;
