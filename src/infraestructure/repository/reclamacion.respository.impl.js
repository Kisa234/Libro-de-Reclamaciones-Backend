"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReclamacionRepositoryImpl = void 0;
class ReclamacionRepositoryImpl {
    constructor(reclamacionDatasource) {
        this.reclamacionDatasource = reclamacionDatasource;
    }
    createReclamacion(createReclamacionDto) {
        return this.reclamacionDatasource.createReclamacion(createReclamacionDto);
    }
}
exports.ReclamacionRepositoryImpl = ReclamacionRepositoryImpl;
