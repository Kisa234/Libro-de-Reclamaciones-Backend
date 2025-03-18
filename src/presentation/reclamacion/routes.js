"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReclamoRouter = void 0;
const reclamacion_datasource_impl_1 = require("../../infraestructure/datasource/reclamacion.datasource.impl");
const EmailService_1 = require("../../infraestructure/service/EmailService");
const controller_reclamacion_1 = require("./controller-reclamacion");
const reclamacion_respository_impl_1 = require("../../infraestructure/repository/reclamacion.respository.impl");
const express_1 = require("express");
class ReclamoRouter {
    static get routes() {
        const router = (0, express_1.Router)();
        const emailService = new EmailService_1.EmailService();
        const datasource = new reclamacion_datasource_impl_1.ReclamacionDatasourceImpl(emailService);
        const repository = new reclamacion_respository_impl_1.ReclamacionRepositoryImpl(datasource);
        const reclamoController = new controller_reclamacion_1.ReclamacionController(repository);
        router.post('/', reclamoController.createReclamo);
        return router;
    }
}
exports.ReclamoRouter = ReclamoRouter;
