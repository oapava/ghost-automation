import fs from 'fs';
import path from 'path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

// Rutas de las carpetas
const imgDir1 = 'C:\\Users\\Prive\\Uniandes\\ciclo2\\folderForTesting\\ghost-automation\\pixelmatch\\bitmaps_reference';  // Primera carpeta
const imgDir2 = 'C:\\Users\\Prive\\Uniandes\\ciclo2\\folderForTesting\\ghost-automation\\pixelmatch\\bitmaps_test';  // Segunda carpeta
const outputDir = 'C:\\Users\\Prive\\Uniandes\\ciclo2\\folderForTesting\\ghost-automation\\pixelmatch\\results';  // Ruta para guardar los informes y las imágenes de diferencias

// Verificar si el directorio de salida existe, y si no, crearlo
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Leer las imágenes de ambas carpetas
const files1 = fs.readdirSync(imgDir1).filter(file => file.endsWith('.png'));
const files2 = fs.readdirSync(imgDir2).filter(file => file.endsWith('.png'));

if (files1.length !== files2.length) {
    console.error('Las carpetas no tienen el mismo número de archivos');
    process.exit(1);
}

// Acumular los resultados de todas las comparaciones
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
    }
    h1 {
      color: #333;
    }
    img {
      max-width: 100%;
      border: 1px solid #ccc;
    }
    .container {
      margin-top: 20px;
    }
    .info {
      margin-top: 20px;
      font-size: 16px;
      color: #555;
    }
    .image-row {
      margin-top: 30px;
      padding: 20px;
      border-bottom: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <h1>Reporte de Comparación de Imágenes</h1>
`;

files1.forEach((file, index) => {
    const img1Path = path.join(imgDir1, file);
    const img2Path = path.join(imgDir2, files2[index]);

    // Leer las imágenes
    const img1 = fs.readFileSync(img1Path);
    const img2 = fs.readFileSync(img2Path);

    // Decodificar las imágenes PNG
    const img1PNG = PNG.sync.read(img1);
    const img2PNG = PNG.sync.read(img2);

    // Crear una imagen para la diferencia
    const { width, height } = img1PNG;
    const diff = new PNG({ width, height });

    // Comparar las dos imágenes
    const numDiffPixels = pixelmatch(
        img1PNG.data, img2PNG.data, diff.data, width, height, { threshold: 0.1 }
    );

    // Guardar la imagen de diferencia
    const diffPath = path.join(outputDir, `diff_${file}`);
    fs.writeFileSync(diffPath, PNG.sync.write(diff));

    // Añadir la comparación al contenido HTML
    htmlContent += `
  <div class="image-row">
    <h2>Comparación de: ${file}</h2>
    <div class="container">
      <h3>Imagen 1</h3>
      <img src="${img1Path}" alt="Imagen 1">
      <h3>Imagen 2</h3>
      <img src="${img2Path}" alt="Imagen 2">
      <h3>Imagen de Diferencias</h3>
      <img src="diff_${file}" alt="Diferencias entre las imágenes">
    </div>
    <div class="info">
      <p><strong>Fecha de comparación:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Número de píxeles diferentes:</strong> ${numDiffPixels}</p>
      <p><strong>Umbral de diferencia:</strong> 0.1</p>
    </div>
  </div>
  `;
});

htmlContent += `
</body>
</html>
`;

// Guardar el reporte HTML con todas las comparaciones
const reportPath = path.join(outputDir, 'reporte_comparacion_general.html');
fs.writeFileSync(reportPath, htmlContent);

console.log(`Reporte HTML generado en: ${reportPath}`);
