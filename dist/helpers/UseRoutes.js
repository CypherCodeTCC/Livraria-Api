"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UseRoutes {
    constructor(_app) {
        this._app = _app;
    }
    use(routes) {
        if (routes.length < 1) {
            throw Error("Array de rotas não pode estar vazio");
        }
        for (const route of routes) {
            this._app.use(route);
        }
    }
}
exports.default = UseRoutes;
//# sourceMappingURL=UseRoutes.js.map