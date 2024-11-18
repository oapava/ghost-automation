import fs from 'fs';
import path from 'path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const currentDir = process.cwd();


const imgDir1 = path.join(currentDir,  'bitmaps_reference');
const imgDir2 = path.join(currentDir,   'bitmaps_test');
const outputDir = path.join(currentDir,  'reports');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files1 = fs.readdirSync(imgDir1).filter(file => file.endsWith('.png'));
const files2 = fs.readdirSync(imgDir2).filter(file => file.endsWith('.png'));


let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reporte de Comparación de Imágenes</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f9f9f9;
    }
    h1 {
      color: #444;
    }
    img {
      max-width: 300px;
      border: 1px solid #ccc;
    }
    .container {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      margin-top: 20px;
    }
    .info {
      margin-top: 10px;
      font-size: 16px;
      color: #555;
    }
    .image-row {
      padding: 20px;
      border-bottom: 1px solid #ccc;
      background-color: #fff;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <h1>Reporte de Comparación de Imágenes</h1>
`;

files1.forEach((file, index) => {
    const img1Path = path.join(imgDir1, file);
    const img2Path = files2[index] ? path.join(imgDir2, files2[index]) : null;

    if (!img2Path || !fs.existsSync(img2Path)) {
        return;
    }

    try {
        const img1 = fs.readFileSync(img1Path);
        const img2 = fs.readFileSync(img2Path);

        const img1PNG = PNG.sync.read(img1);
        const img2PNG = PNG.sync.read(img2);

        if (img1PNG.width !== img2PNG.width || img1PNG.height !== img2PNG.height) {
            throw new Error(`Las imágenes no tienen el mismo tamaño: ${file}`);
        }

        const { width, height } = img1PNG;
        const diff = new PNG({ width, height });

        const numDiffPixels = pixelmatch(
            img1PNG.data,
            img2PNG.data,
            diff.data,
            width,
            height,
            { threshold: 0.1 }
        );

        const diffFilename = `diff_${file}`;
        const diffPath = path.join(outputDir, diffFilename);
        fs.writeFileSync(diffPath, PNG.sync.write(diff));

        htmlContent += `
        <div class="image-row">
          <h2>Comparación de: ${file}</h2>
          <div class="container">
            <div>
              <h3>Imagen 1</h3>
              <img src="${path.relative(outputDir, img1Path)}" alt="Imagen 1">
            </div>
            <div>
              <h3>Imagen 2</h3>
              <img src="${path.relative(outputDir, img2Path)}" alt="Imagen 2">
            </div>
            <div>
              <h3>Diferencias</h3>
              <img src="${diffFilename}" alt="Diferencias entre las imágenes">
            </div>
          </div>
          <div class="info">
            <p><strong>Fecha de comparación:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Píxeles diferentes:</strong> ${numDiffPixels}</p>
            <p><strong>Umbral de diferencia:</strong> 0.1</p>
          </div>
        </div>
        `;
    } catch (error) {
        console.error(`Error procesando ${file}: ${error.message}`);
    }
});

htmlContent += `
</body>
</html>
`;

const reportPath = path.join(outputDir, 'reporte_comparacion_general.html');
fs.writeFileSync(reportPath, htmlContent);

console.log(`Reporte HTML generado en: ${reportPath}`);