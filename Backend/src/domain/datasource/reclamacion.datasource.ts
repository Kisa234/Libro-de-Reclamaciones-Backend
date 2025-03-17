import { CreateReclamacionDto } from "../dto/create-reclamacion.dto";
import {ReclamacionEntity} from "../entities/reclamacion.entity";

export abstract class ReclamacionDatasource {

    abstract createReclamacion(createReclamacionDto:CreateReclamacionDto): Promise<ReclamacionEntity>;
    

}