import { CreateReclamacionDto } from "../dto/create-reclamacion.dto";
import { ReclamacionEntity } from "../entities/reclamacion.entity";
import { ReclamacionRepository } from "../repository/reclamacion.repository";

export interface CreateReclamacionUseCase {
    execute(createReclamacionDto: CreateReclamacionDto): Promise<ReclamacionEntity>;
}

export class CreateReclamacion implements CreateReclamacionUseCase{
    constructor (
        private readonly reclamacionRepository: ReclamacionRepository,
    ){}

    execute(createReclamacionDto: CreateReclamacionDto): Promise<ReclamacionEntity> {
        return this.reclamacionRepository.createReclamacion(createReclamacionDto);
    }

}