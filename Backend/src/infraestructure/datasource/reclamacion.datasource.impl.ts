import { prisma } from '../../data';
import { ReclamacionDatasource } from '../../domain/datasource/reclamacion.datasource';
import { CreateReclamacionDto } from '../../domain/dto/create-reclamacion.dto';
import { ReclamacionEntity } from '../../domain/entities/reclamacion.entity';
import { EmailService } from '../service/EmailService';

export class ReclamacionDatasourceImpl implements ReclamacionDatasource{
    
    constructor(
        private readonly emailService: EmailService
    ){}

    async createReclamacion(createReclamacionDto: CreateReclamacionDto): Promise<ReclamacionEntity> {
        const reclamacion = await prisma.reclamacion.create({
            data:createReclamacionDto!
        });
        const email = await this.emailService.sendEmail(reclamacion);
        return ReclamacionEntity.fromObject(reclamacion);
    }

}