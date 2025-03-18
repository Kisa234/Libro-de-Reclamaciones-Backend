"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReclamacion = void 0;
class CreateReclamacion {
    constructor(reclamacionRepository) {
        this.reclamacionRepository = reclamacionRepository;
    }
    execute(createReclamacionDto) {
        return this.reclamacionRepository.createReclamacion(createReclamacionDto);
    }
}
exports.CreateReclamacion = CreateReclamacion;
