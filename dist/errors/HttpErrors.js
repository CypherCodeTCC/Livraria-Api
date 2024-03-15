"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpErrors {
    constructor(_res) {
        this._res = _res;
    }
    badRequest(errors, message) {
        const CODE = 400;
        const response = {
            message,
            errors,
        };
        return this._res.status(CODE).json(response);
    }
}
exports.default = HttpErrors;
//# sourceMappingURL=HttpErrors.js.map