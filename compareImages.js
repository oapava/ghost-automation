const fs = require('fs-extra');
const path = require('path');
const resemble = require('resemblejs');

// Carpetas base
const ghost5 = path.join(__dirname, 'cypress-e2e/cypress/screenshots/5');
const ghost4 = path.join(__dirname, 'cypress-e2e/cypress/screenshots/4');
const outputFolder = path.join(__dirname, 'output_differences');

// Archivo de reporte
const reportFile = path.join(outputFolder, 'comparison_report.html');

// Crear la carpeta de diferencias si no existe
fs.ensureDirSync(outputFolder);

// Función para determinar si un archivo debe ser ignorado
function shouldIgnoreFile(fileName) {
    const repeatedPattern = /\(\d+\)\.\w+$/; // Coincide con patrones como "(1).png"
    return repeatedPattern.test(fileName);
}

// Función para obtener archivos y cada sub carpeta
function getFilesRecursively(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFilesRecursively(filePath));
        } else if (!shouldIgnoreFile(file)) { // Ignorar archivos repetidos
            results.push(filePath);
        }
    });
    return results;
}

// Función para generar el HTML del reporte visual
function generateHTMLReport(report, summary) {
    const rows = report.map((item) => {
        const originalImage1 = item.image1Path
            ? `<a href="${item.image1Path}" target="_blank"><img src="${item.image1Path}" alt="Image 1" style="max-width:200px;"></a>`
            : 'N/A';
        const originalImage2 = item.image2Path
            ? `<a href="${item.image2Path}" target="_blank"><img src="${item.image2Path}" alt="Image 2" style="max-width:200px;"></a>`
            : 'N/A';
        const diffImage = item.outputDiffPath
            ? `<a href="${item.outputDiffPath}" target="_blank"><img src="${item.outputDiffPath}" alt="Diff" style="max-width:200px;"></a>`
            : 'N/A';
        return `
            <tr>
                <td>${item.image}</td>
                <td>${originalImage1}</td>
                <td>${originalImage2}</td>
                <td>${diffImage}</td>
                <td>${item.misMatchPercentage !== null ? item.misMatchPercentage.toFixed(2) + '%' : 'N/A'}</td>
                <td>${item.processingTime}</td>
            </tr>
        `;
    }).join('');

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reporte de comparación de imágenes</title>
            <style>
                body { font-family: Arial, sans-serif; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f4f4f4; }
                img { max-width: 100%; height: auto; }
            </style>
        </head>
        <body>
            <h1>Reporte de comparación de imágenes</h1>
            <h2>Resumen</h2>
            <ul>
                <li>Total Imágenes comparadas: ${summary.totalCompared}</li>
                <li>Imágenes con diferencias: ${summary.totalDifferent}</li>
                <li>Porcentaje promedio de desajuste: ${summary.averageMismatchPercentage.toFixed(2)}%</li>
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Version 1</th>
                        <th>Version 2</th>
                        <th>Difference</th>
                        <th>Mismatch Percentage</th>
                        <th>Processing Time</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </body>
        </html>
    `;
}

// Función principal para comparar imágenes
async function compareImages() {
    const version1Images = getFilesRecursively(ghost5);
    const version2Images = getFilesRecursively(ghost4);
    const report = [];
    let totalDifferent = 0;
    let totalMismatchPercentage = 0;

    for (const image1Path of version1Images) {
        const relativePath = path.relative(ghost5, image1Path);
        const image2Path = path.join(ghost4, relativePath);
        const diffOutputPath = path.join(outputFolder, relativePath);

        if (fs.existsSync(image2Path)) {
            const startTime = Date.now();
            fs.ensureDirSync(path.dirname(diffOutputPath));
            const image1 = fs.readFileSync(image1Path);
            const image2 = fs.readFileSync(image2Path);

            await new Promise((resolve) => {
                resemble(image1)
                    .compareTo(image2)
                    .ignoreColors()
                    .onComplete((data) => {
                        if (data.getBuffer) {
                            fs.writeFileSync(diffOutputPath, data.getBuffer());
                        }

                        const misMatchPercentage = parseFloat(data.misMatchPercentage);
                        totalMismatchPercentage += misMatchPercentage;
                        if (misMatchPercentage > 0) totalDifferent++;

                        report.push({
                            image: relativePath,
                            image1Path: `file://${image1Path.replace(/\\/g, '/')}`,
                            image2Path: `file://${image2Path.replace(/\\/g, '/')}`,
                            outputDiffPath: `file://${diffOutputPath.replace(/\\/g, '/')}`,
                            misMatchPercentage,
                            processingTime: `${Date.now() - startTime}ms`,
                            configurations: 'Ignore Colors',
                        });
                        console.log(
                            `Comparado: ${relativePath} - Diferencia: ${misMatchPercentage}%`
                        );
                        resolve();
                    });
            });
        } else {
            console.log(`Archivo no encontrado en la segunda versión: ${relativePath}`);
        }
    }

    const summary = {
        totalCompared: report.length,
        totalDifferent,
        averageMismatchPercentage: report.length > 0 ? totalMismatchPercentage / report.length : 0,
    };

    // Generar el reporte HTML
    const htmlReport = generateHTMLReport(report, summary);
    fs.writeFileSync(reportFile, htmlReport);
    console.log(`Reporte HTML guardado en: ${reportFile}`);
}

compareImages()
    .then(() => console.log('Comparación completada.'))
    .catch((err) => console.error('Error durante la comparación:', err));
