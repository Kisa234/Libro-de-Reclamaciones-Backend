import { Request, Response } from 'express';

import { ReclamacionRepository } from '../../domain/repository/reclamacion.repository';
import { CreateReclamacionDto } from '../../domain/dto/create-reclamacion.dto';
import { CreateReclamacion } from '../../domain/usecases/create-reclamacion.usecase';
import { ReclamacionEntity } from '../../domain/entities/reclamacion.entity';



export class ReclamacionController {

    constructor(
        private readonly reclamacionRepository: ReclamacionRepository
    ){}

    public createReclamo = async (req: Request , res: Response) => {  
        const [error, createReclamacionDto] = CreateReclamacionDto.create(req.body);
    
        if (error) {
            console.log('DTO validation error:', error);
            return res.status(400).json({ error });
        }
    
        try {
            const reclamo = await new CreateReclamacion(this.reclamacionRepository)
                .execute(createReclamacionDto!);            
            console.log('Reclamo creado:', reclamo);
            return res.json(reclamo);
        } catch (err: any) {
            console.log('Error atrapado en el catch:', err);
            return res.status(500).json({ error: err.message || 'Error desconocido', detalle: err });
        }
    };
    

}