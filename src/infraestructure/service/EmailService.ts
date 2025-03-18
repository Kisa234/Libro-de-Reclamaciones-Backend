import { envs } from "../../config/envs";
import nodemailer from 'nodemailer';
import fs from 'fs';
import { ReclamacionEntity } from '../../domain/entities/reclamacion.entity';
import { generateReclamoHTML } from "../../domain/usecases/generate-html.usecase";
import path from 'path';

export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });

    constructor() {}

    async sendEmail(reclamacionEntity: ReclamacionEntity): Promise<boolean> {
        const htmlGenerator = new generateReclamoHTML();
        const html = htmlGenerator.execute(reclamacionEntity);

        const pdfPath = await htmlGenerator.generatePDF(html); // Ruta al archivo PDF generado

        const htmlBody = `
            <h1>Reclamación Recibida</h1>
            <p>Estimado/a ${reclamacionEntity.Nombres} ${reclamacionEntity.Apellidos},</p>
            <p>Gracias por contactarnos. Hemos recibido su reclamación.</p>
            <p>Adjunto encontrará su hoja de reclamación en PDF.</p>
            <p>Saludos cordiales,<br/>Equipo de Atención al Cliente</p>
        `;

        try {
            const pdfBuffer = fs.readFileSync(pdfPath); // Leer el archivo como Buffer

            await this.transporter.sendMail({
                to: reclamacionEntity.Correo,
                subject: 'Hoja de Reclamo Online PiolaBrands',
                html: htmlBody,
                attachments: [
                    {
                        filename: 'reclamacion.pdf',
                        content: pdfBuffer,
                        contentType: 'application/pdf'
                    }
                ]
            });

            // Opcional: eliminar el PDF después de enviar el correo
            // fs.unlinkSync(pdfPath);

            return true;

        } catch (error) {
            console.error('Error al enviar el correo:', error);
            return false;
        }
    }
}
