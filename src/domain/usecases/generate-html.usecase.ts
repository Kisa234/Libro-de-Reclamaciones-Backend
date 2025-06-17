import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { ReclamacionEntity } from '../entities/reclamacion.entity';

export interface GenerateReclamoHTMLUseCase {
  execute(reclamacionEntity: ReclamacionEntity): string;
  generatePDF(html: string): Promise<string>;
}

export class generateReclamoHTML implements GenerateReclamoHTMLUseCase {
  execute(reclamoEntity: ReclamacionEntity): string {
    const filePath = path.join(__dirname, '../../../index.html');
    let html = fs.readFileSync(filePath, 'utf8');

    const reclamoJSON = JSON.stringify({
      ...reclamoEntity,
      FechaReclamo: reclamoEntity.FechaReclamo.toISOString(),
      FechaRespuesta: reclamoEntity.FechaRespuesta.toISOString()
    });

    const scriptTag = `<script id="reclamo-data" type="application/json">${reclamoJSON}</script>`;
    const idx = html.indexOf('<script>');
    html = idx >= 0
      ? html.slice(0, idx) + scriptTag + '\n' + html.slice(idx)
      : html.replace('</body>', `${scriptTag}\n</body>`);

    return html;
  }

  async generatePDF(html: string): Promise<string> {
    const outputDir = path.join(__dirname, '../../../reclamos');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const pdfPath = path.join(outputDir, `reclamo_${Date.now()}.pdf`);

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
    });

    await browser.close();

    return pdfPath;
  }
}
