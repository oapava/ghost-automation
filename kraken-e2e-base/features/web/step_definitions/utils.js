const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');  // Usamos canvas para redimensionar la imagen

// Definir la resolución estándar
const STANDARD_WIDTH = 1280;  // Ancho estándar
const STANDARD_HEIGHT = 720;  // Alto estándar

function saveScreenshot(screenshotBase64, filename) {
    const screenshotDir = path.join(__dirname, '..', '..', '..', '..', 'pixelmatch','bitmaps_reference');
    let screenshotPath = path.join(screenshotDir, filename);

    let counter = 1;
    while (fs.existsSync(screenshotPath)) {
        const extname = path.extname(filename); // Obtiene la extensión del archivo (por ejemplo, '.png')
        const basename = path.basename(filename, extname); // Obtiene el nombre base del archivo (sin extensión)

        screenshotPath = path.join(screenshotDir, `${basename}-${counter}${extname}`);
        counter++;
    }

    if (!fs.existsSync(path.dirname(screenshotPath))) {
        fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
    }

    // Convertir el base64 a un buffer de imagen
    const buffer = Buffer.from(screenshotBase64, 'base64');

    // Cargar la imagen desde el buffer
    loadImage(buffer).then((image) => {
        // Crear un canvas con la resolución estándar
        const canvas = createCanvas(STANDARD_WIDTH, STANDARD_HEIGHT);
        const ctx = canvas.getContext('2d');

        // Dibujar la imagen redimensionada en el canvas
        ctx.drawImage(image, 0, 0, STANDARD_WIDTH, STANDARD_HEIGHT);

        // Guardar la imagen redimensionada
        const out = fs.createWriteStream(screenshotPath);
        const stream = canvas.createPNGStream();
        stream.pipe(out);

        out.on('finish', () => {
            console.log(`Screenshot saved at ${screenshotPath}`);
        });
    }).catch((err) => {
        console.error('Error al cargar la imagen:', err);
    });
}

module.exports = saveScreenshot;