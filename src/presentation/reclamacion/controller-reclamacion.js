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
exports.ReclamacionController = void 0;
const create_reclamacion_dto_1 = require("../../domain/dto/create-reclamacion.dto");
const create_reclamacion_usecase_1 = require("../../domain/usecases/create-reclamacion.usecase");
class ReclamacionController {
    constructor(reclamacionRepository) {
        this.reclamacionRepository = reclamacionRepository;
        this.createReclamo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createReclamacionDto] = create_reclamacion_dto_1.CreateReclamacionDto.create(req.body);
            if (error) {
                console.log('DTO validation error:', error);
                return res.status(400).json({ error });
            }
            try {
                const reclamo = yield new create_reclamacion_usecase_1.CreateReclamacion(this.reclamacionRepository)
                    .execute(createReclamacionDto);
                console.log('Reclamo creado:', reclamo);
                return res.json(reclamo);
            }
            catch (err) {
                console.log('Error atrapado en el catch:', err);
                return res.status(500).json({ error: err.message || 'Error desconocido', detalle: err });
            }
        });
    }
}
exports.ReclamacionController = ReclamacionController;
