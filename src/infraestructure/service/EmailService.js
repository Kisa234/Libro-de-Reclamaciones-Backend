"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const envs_1 = require("../../config/envs");
const nodemailer_1 = __importDefault(require("nodemailer"));
const fs_1 = __importDefault(require("fs"));
const generate_html_usecase_1 = require("../../domain/usecases/generate-html.usecase");
class EmailService {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            service: envs_1.envs.MAILER_SERVICE,
            auth: {
                user: envs_1.envs.MAILER_EMAIL,
                pass: envs_1.envs.MAILER_SECRET_KEY
            }
        });
    }
    sendEmail(reclamacionEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const htmlGenerator = new generate_html_usecase_1.generateReclamoHTML();
            const html = htmlGenerator.execute(reclamacionEntity);
            const pdfPath = yield htmlGenerator.generatePDF(html); // Ruta al archivo PDF generado
            const htmlBody = `
            <h1>Reclamación Recibida</h1>
            <p>Estimado/a ${reclamacionEntity.Nombres} ${reclamacionEntity.Apellidos},</p>
            <p>Gracias por contactarnos. Hemos recibido su reclamación.</p>
            <p>Adjunto encontrará su hoja de reclamación en PDF.</p>
            <p>Saludos cordiales,<br/>Equipo de Atención al Cliente</p>
        `;
            try {
                const pdfBuffer = fs_1.default.readFileSync(pdfPath); // Leer el archivo como Buffer
                yield this.transporter.sendMail({
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
            }
            catch (error) {
                console.error('Error al enviar el correo:', error);
                return false;
            }
        });
    }
}
exports.EmailService = EmailService;
