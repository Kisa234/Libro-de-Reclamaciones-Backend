import { Router } from "express";
import { ReclamoRouter } from "./reclamacion/routes";




export class AppRoutes{

    static get routes():Router{
        const router = Router();
        
        router.use('/reclamo', ReclamoRouter.routes); 

        return router;
    }


}