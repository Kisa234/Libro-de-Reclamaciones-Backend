import { envs } from "../../config/envs";
import nodemailer from 'nodemailer';
import { ReclamacionEntity } from '../../domain/entities/reclamacion.entity';
import { generateReclamoHTML } from "../../domain/usecases/generate-html.usecase";


export class EmailService {

    private transporter = nodemailer.createTransport({
        service:envs.MAILER_SERVICE,
        auth:{
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    constructor(
    ){
       
    }

    async generatePdf(reclamacionEntity:ReclamacionEntity):Promise<string>{
        const htmlGenerator = new generateReclamoHTML();
        const html =  htmlGenerator.execute(reclamacionEntity);
        const pdf = await htmlGenerator.generatePDF(html);
        return pdf;
    }

    async sendEmail( reclamacionEntity:ReclamacionEntity):Promise<boolean>{

        const pdf = await this.generatePdf(reclamacionEntity);
        
        const htmlBody = 
        `
            <h1>Reclamación</h1>
            <p>Estimado/a ${reclamacionEntity.Nombres + ' ' + reclamacionEntity.Apellidos},</p>
            <p>Gracias por contactarnos, hemos recibido su reclamación.</p>
            <p>En breve nos pondremos en contacto con usted.</p>
            <p>Saludos cordiales,</p>
            <p>Equipo de Atención al Cliente</p>

        `

        try{

            const sentInformation = await this.transporter.sendMail({
                to:reclamacionEntity.Correo,
                subject:'Hoja de Reclamo Online PiolaBrands',
                html:htmlBody,
                attachments:[
                    {
                        filename: 'reclamacion.pdf',
                        content: await pdf,
                        encoding: 'base64'
                    }
                ]
            });           
        
            return true;

        }catch(error){return false;}
    }

   

    
}