"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerNotesByCustomerOldId = void 0;
var getCustomerNotesByCustomerOldId = function (customerOldId) { return __awaiter(void 0, void 0, void 0, function () {
    var res, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("https://crmapi.avaxonline.com/api/v1/notes/".concat(customerOldId, "/customer"), {
                        headers: {
                            accept: "application/json, text/plain, */*",
                            "accept-language": "tr,en-US;q=0.9,en;q=0.8,nl;q=0.7",
                            authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhenJheSIsInJvbGUiOiJhZG1pbiIsImF1dGhvcml0eSI6WyJhbmFzYXlmYSIsImN1c3RvbWVyX2luZm9fYWdncmVnYXRpb24iLCJkYXRhX2VrbGUiLCJkYXRhX2d1bmNlbGxlbWUiLCJkYXRhX3NpbG1lIiwiZG9rdW1hbl9tZW51IiwiZ29vZ2xlX3NoZWV0X2xpc3Rlc2kiLCJoYXRpcmxhdGljaV9la2xlIiwiaGF0aXJsYXRpY2lfbGlzdGVzaSIsImtheW5ha19kZXRheSIsImtheW5ha19la2xlIiwia2F5bmFrX2xpc3Rlc2kiLCJsZWFkX2RldGF5IiwibGVhZF9la2xlIiwibGVhZF9saXN0ZXNpIiwibGVhZF9tZW51IiwibWV0YTRfbGlzdGVsZXJpIiwibXVzdGVyaV9hZGkiLCJtdXN0ZXJpX2RldGF5IiwibXVzdGVyaV9la2xlIiwibXVzdGVyaV9lbWFpbF9hZHJlc2kiLCJtdXN0ZXJpX2d1bmNlbGxlIiwibXVzdGVyaV9pbmRpcm1lIiwibXVzdGVyaV9saXN0ZXNpIiwibXVzdGVyaV9saXN0ZXNpX2F0YW1hX2d1bmNlbGxlbWUiLCJtdXN0ZXJpX2xpc3Rlc2lfbGVhZF9ndW5jZWxsZW1lIiwibXVzdGVyaV9saXN0ZXNpX3NvcnVtbHVfa2lzaV9nZWNtaXNpIiwibXVzdGVyaV9saXN0ZXNpX3RvcGx1X2d1bmNlbGxlbWUiLCJtdXN0ZXJpX21lbnUiLCJtdXN0ZXJpX3NvcnVtbHVfcGVyc29uZWwiLCJtdXN0ZXJpX3NveWFkaSIsIm11c3RlcmlfdGVsZWZvbl9udW1hcmFzaSIsIm5vdF9la2xlbWUiLCJub3RfZ29ydW50dWxlbWUiLCJwZXJzb25lbF9kZXRhecSxIiwicGVyc29uZWxfZWtsZSIsInBlcnNvbmVsX2xpc3Rlc2kiLCJwZXJzb25lbF9tZW51IiwicGVyc29ubmVsX21lbnUiLCJyYXBvcl9tZW51IiwicmFwb3JfbXVzdGVyaV9kdXJ1bXUiLCJyb2xfbWVudSIsInJvbF92ZV95ZXRraWxlbmRpcm1lIiwicm9sX3ZlX3lldGtpbGVuZGlybWVfZGV0YXkiLCJyb2xfdmVfeWV0a2lsZW5kaXJtZV9saXN0ZXNpIiwic2F0aXNfbXVzdGVyaV9la2xlIiwidGFraW1fZGV0YXkiLCJ0YWtpbV9la2xlIiwidGFraW1fbGlzdGVzaSIsInRha2ltX21lbnUiLCJ0b3BsdV9tdXN0ZXJpX2VrbGUiLCJ0dW1faGFyZWtldF9nZWNtaXNpIiwidHVtX211c3Rlcmlfbm90bGFyaSIsInR1bV9tdXN0ZXJpX3NvcnVtbHVfa2lzaV9nZWNtaXNpIiwieW9uZXRpbV9tZW51Il0sIm10NEVuYWJsZSI6ZmFsc2UsImlkIjo0LCJpc0Nvbm5lY3RQYW5lbCI6ZmFsc2UsImV4cCI6MTczMjQwNjg2MywiaWF0IjoxNzMyMzYzNjYzLCJtdDVFbmFibGUiOmZhbHNlLCJncm91cCI6eyJpZCI6MSwiY29kZSI6bnVsbCwibmFtZSI6IlnDtm5ldGljaSJ9fQ.OYx5D79l2qdDzBdIlws6ebgUbZCPE4Bkfsgix4DbxTd52V9rf1li0N1U2Cgu8wB6Jx9BTIEbcMQRgmm5tfntaA",
                            "cache-control": "no-cache",
                            pragma: "no-cache",
                            priority: "u=1, i",
                            "sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": '"macOS"',
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-site",
                            Referer: "https://crm.avaxonline.com/",
                            "Referrer-Policy": "strict-origin-when-cross-origin",
                        },
                        body: null,
                        method: "GET",
                    })];
            case 1:
                res = _a.sent();
                if (res.status === 404) {
                    return [2 /*return*/, []];
                }
                return [4 /*yield*/, res.json()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                error_1 = _a.sent();
                return [2 /*return*/, []];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getCustomerNotesByCustomerOldId = getCustomerNotesByCustomerOldId;
