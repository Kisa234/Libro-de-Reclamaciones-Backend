import { ClassImplementsBuilder } from './../../../node_modules/ast-types/gen/builders.d';
import { ReclamacionRepository } from '../../domain/repository/reclamacion.repository';
import { CreateReclamacionDto } from '../../domain/dto/create-reclamacion.dto';
import { Request, Response } from 'express';
import { CreateReclamacion } from '../../domain/usecases/create-reclamacion.usecase';
import { ReclamacionEntity } from '../../domain/entities/reclamacion.entity';


export class ReclamacionController {

    constructor(
        private readonly reclamacionRepository: ReclamacionRepository
    ){}

    public createReclamo =  (req: Request, res: Response) => {  
        const [error, createReclamacionDto] = CreateReclamacionDto.create(req.body);
        
        
        new CreateReclamacion(this.reclamacionRepository)
            .execute(createReclamacionDto!)
            .then(reclamo => res.status(200).json(reclamo))
            .catch(err => res.status(500).json(err));

    };
}