import fs from 'fs';
import path from 'path';
import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

import { ReclamacionEntity } from '../entities/reclamacion.entity';

export interface GenerateReclamoHTMLUseCase {
    execute(reclamacionEntity: ReclamacionEntity): string;
    generatePDF(html:string) : Promise<string>;
}



export class generateReclamoHTML implements GenerateReclamoHTMLUseCase {
    
    

    execute(reclamoEntity: ReclamacionEntity): string {
        const filePath = path.join(__dirname, '../../../index.html');
        let html = fs.readFileSync(filePath, 'utf8');
    
        // Convertir entidad a JSON (formatear fechas como ISO string)
        const reclamoJSON = JSON.stringify({
            ...reclamoEntity,
            FechaReclamo: reclamoEntity.FechaReclamo.toISOString(),
            FechaRespuesta: reclamoEntity.FechaRespuesta.toISOString()
        });
    
        // Buscar el <script> que contiene la lógica
        const scriptStartTag = '<script>';
        const scriptIndex = html.indexOf(scriptStartTag);
    
        if (scriptIndex !== -1) {
            // Insertar <script id="reclamo-data"> justo antes del script principal
            const jsonScriptTag = `
                <script id="reclamo-data" type="application/json">
                ${reclamoJSON}
                </script>`;
    
            html = html.slice(0, scriptIndex) + jsonScriptTag + '\n' + html.slice(scriptIndex);
        } else {
            // Si no encuentra el script, opcionalmente puedes insertar al final del body
            const fallbackScript = `
                 <script id="reclamo-data" type="application/json">
                 ${reclamoJSON}
                 </script>`;
            html = html.replace('</body>', `${fallbackScript}\n</body>`);
        }
    
        return html;
    }
    

    async generatePDF(html: string): Promise<string> {
        const outputDir = path.join(__dirname, '../../../reclamos'); // Carpeta donde se guardará el PDF
        
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true }); // Crea la carpeta si no existe
        }

        const pdfPath = path.join(outputDir, `reclamo_${Date.now()}.pdf`); // Nombre único

        const browser = await puppeteer.launch({
          args: chromium.args,
          executablePath: await chromium.executablePath || '/usr/bin/chromium-browser', // fallback
          headless: chromium.headless,
        });        
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

