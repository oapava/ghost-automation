const fs = require('fs');
const path = require('path');

function saveScreenshot(screenshotBase64, filename) {
    const screenshotDir = path.join(__dirname, '..', '..', '..', '..', 'backstop', 'bitmaps_test');
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

    fs.writeFileSync(screenshotPath, screenshotBase64, 'base64');
    console.log(`Screenshot saved at ${screenshotPath}`);
}

module.exports = saveScreenshot;
