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
exports.generateReclamoHTML = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const puppeteer_1 = __importDefault(require("puppeteer"));
class generateReclamoHTML {
    execute(reclamoEntity) {
        const filePath = path_1.default.join(__dirname, '../../public/reclamo.html');
        let html = fs_1.default.readFileSync(filePath, 'utf8');
        // Convertir entidad a JSON (formatear fechas como ISO string)
        const reclamoJSON = JSON.stringify(Object.assign(Object.assign({}, reclamoEntity), { FechaReclamo: reclamoEntity.FechaReclamo.toISOString(), FechaRespuesta: reclamoEntity.FechaRespuesta.toISOString() }));
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
        }
        else {
            // Si no encuentra el script, opcionalmente puedes insertar al final del body
            const fallbackScript = `
                 <script id="reclamo-data" type="application/json">
                 ${reclamoJSON}
                 </script>`;
            html = html.replace('</body>', `${fallbackScript}\n</body>`);
        }
        return html;
    }
    generatePDF(html) {
        return __awaiter(this, void 0, void 0, function* () {
            const outputDir = path_1.default.join(__dirname, '../../../reclamos'); // Carpeta donde se guardará el PDF
            if (!fs_1.default.existsSync(outputDir)) {
                fs_1.default.mkdirSync(outputDir, { recursive: true }); // Crea la carpeta si no existe
            }
            const pdfPath = path_1.default.join(outputDir, `reclamo_${Date.now()}.pdf`); // Nombre único
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            yield page.setContent(html, { waitUntil: 'load' });
            // Generar y guardar el PDF
            yield page.pdf({
                path: pdfPath,
                format: 'A4',
                printBackground: true
            });
            yield browser.close();
            return pdfPath;
        });
    }
}
exports.generateReclamoHTML = generateReclamoHTML;
