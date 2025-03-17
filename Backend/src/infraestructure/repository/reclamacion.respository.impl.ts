import { ReclamacionEntity } from '../../domain/entities/reclamacion.entity';
import { ReclamacionRepository } from '../../domain/repository/reclamacion.repository';
import { ReclamacionDatasource } from '../../domain/datasource/reclamacion.datasource';
import { CreateReclamacionDto } from '../../domain/dto/create-reclamacion.dto';
import { CreateReclamacion } from '../../domain/usecases/create-reclamacion.usecase';

export class ReclamacionRepositoryImpl implements ReclamacionRepository{

    constructor(
        private readonly reclamacionDatasource: ReclamacionDatasource
    ){}

    async createReclamacion(createReclamacionDto: CreateReclamacionDto): Promise<ReclamacionEntity> {
       return await this.reclamacionDatasource.createReclamacion(createReclamacionDto);
    }

}