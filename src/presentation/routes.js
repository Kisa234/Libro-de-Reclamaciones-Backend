"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./reclamacion/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/reclamo', routes_1.ReclamoRouter.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
