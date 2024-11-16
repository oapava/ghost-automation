const { Before, After } = require('@cucumber/cucumber');

console.log('Kraken config is being loaded...');

module.exports = {
    features: './features/**/*.feature',
    steps: './step-definitions/**/*.js',
    format: ['json:./reports/results.json'],
    defaultTimeout: 30000,
    plugins: {
        'kraken-puppeteer': {},
    },

};

Before(() => {
    console.log('Los tests están a punto de comenzar...');
});

After(() => {
    console.log('Los tests han terminado.');
});