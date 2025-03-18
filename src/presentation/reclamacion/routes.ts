import { ReclamacionDatasourceImpl } from "../../infraestructure/datasource/reclamacion.datasource.impl";
import { EmailService } from '../../infraestructure/service/EmailService';
import { ReclamacionController } from "./controller-reclamacion";
import { ReclamacionRepositoryImpl } from "../../infraestructure/repository/reclamacion.respository.impl";
import { Router } from 'express';


export class ReclamoRouter{

    static get routes():Router{
        const router = Router();

        const emailService = new EmailService();
        const datasource = new ReclamacionDatasourceImpl(emailService);
        const repository = new ReclamacionRepositoryImpl(datasource);
        const reclamoController = new ReclamacionController(repository);

        router.post('/', reclamoController.createReclamo); 



        return router;
    }


}