import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

import { ReclamacionEntity } from '../entities/reclamacion.entity';


export interface GenerateReclamoHTMLUseCase {
    execute(reclamacionEntity: ReclamacionEntity): string;
    generatePDF(html:string) : Promise<string>;
}



export class generateReclamoHTML implements GenerateReclamoHTMLUseCase {
    execute(reclamacionEntity: ReclamacionEntity): string {
        const filePath = path.join(__dirname, '../../public/reclamo.html');
        let html = fs.readFileSync(filePath, 'utf8');

    // Mapeo de valores a reemplazar en el HTML
        const replacements: { [key: string]: string } = {
            'fechaReclamo': reclamacionEntity.FechaReclamo.toDateString(),
            'nroCaso': reclamacionEntity.id.toString(),
            'nombreReclamante': reclamacionEntity.Nombres + ' ' + reclamacionEntity.Apellidos,
            'domicilioReclamante': reclamacionEntity.Direccion,
            'Departamento': reclamacionEntity.Departamento,
            'Provincia': reclamacionEntity.Provincia,
            'Distrito': reclamacionEntity.Distrito,
            'dniReclamante': reclamacionEntity.NumeroDocumento,
            'telefonoReclamante': reclamacionEntity.Telefono,
            'correoReclamante': reclamacionEntity.Correo,
            'nombreApoderado': reclamacionEntity.NombrePadre? reclamacionEntity.NombrePadre : ' ',
            'direccionApoderado': reclamacionEntity.DireccionPadre? reclamacionEntity.DireccionPadre : ' ',
            'correoApoderado': reclamacionEntity.CorreoPadre? reclamacionEntity.CorreoPadre : ' ',
            'telefonoApoderado': reclamacionEntity.TelefonoPadre? reclamacionEntity.TelefonoPadre : ' ',
            'montoReclamado': reclamacionEntity.MontoReclamado,
            'descripcionReclamado': reclamacionEntity.ProductoAdquirido,
            'detalleReclamo': reclamacionEntity.DetalleReclamo,
            'pedidoReclamo': reclamacionEntity.PedidoReclamo,
            'fechaRespuesta': reclamacionEntity.FechaRespuesta.toDateString(),
        };

        if (reclamacionEntity.TipoBien === 'SERVICIO') {
            replacements['servcioCheckbox'] = 'X';
        }else {
            replacements['productoCheckbox'] = 'X';
        }

        if(reclamacionEntity.TipoReclamo === 'RECLAMO') {
            replacements['reclamoCheckbox'] = 'X';
        }else if(reclamacionEntity.TipoReclamo === 'QUEJA') {
            replacements['quejaCheckbox'] = 'X';
        }

        // Reemplazar cada valor en el HTML
        Object.keys(replacements).forEach(key => {
            const regex = new RegExp(`id="${key}">[^<]*`, 'g');
            html = html.replace(regex, `id="${key}">${replacements[key]}`);
        });

        

        return html;
    }

    async generatePDF(html: string): Promise<string> {
        const outputDir = path.join(__dirname, '../../../reclamos'); // Carpeta donde se guardará el PDF
        
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true }); // Crea la carpeta si no existe
        }

        const pdfPath = path.join(outputDir, `reclamo_${Date.now()}.pdf`); // Nombre único

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(html, { waitUntil: 'load' });

    // Generar y guardar el PDF
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true
        });

        await browser.close();
        return pdfPath; 
    }

    
    
}

