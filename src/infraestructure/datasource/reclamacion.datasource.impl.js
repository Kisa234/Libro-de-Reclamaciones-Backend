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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReclamacionDatasourceImpl = void 0;
const data_1 = require("../../data");
const reclamacion_entity_1 = require("../../domain/entities/reclamacion.entity");
class ReclamacionDatasourceImpl {
    constructor(emailService) {
        this.emailService = emailService;
    }
    createReclamacion(createReclamacionDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const reclamacion = yield data_1.prisma.reclamacion.create({
                data: createReclamacionDto
            });
            const email = yield this.emailService.sendEmail(reclamacion_entity_1.ReclamacionEntity.fromObject(reclamacion));
            console.log('Email enviado:', email);
            return reclamacion_entity_1.ReclamacionEntity.fromObject(reclamacion);
        });
    }
}
exports.ReclamacionDatasourceImpl = ReclamacionDatasourceImpl;
