module.exports = {
    testFiles: "features/**/*.feature",
    helpers: {
        WebDriver: {
            url: "http://localhost:5173",
            browser: "chrome"
        }
    },
    output: "./output",
    timeout: 30000,
    defaultCommandTimeout: 30000,
    plugins: {
        screenshotOnFail: {
            enabled: true
        }
    },
    hooks: {
        bootstrap: () => {
            console.log('🦑 Kraken configuration loaded successfully!');
            console.log('⚙️  Current configuration:', {
                testFiles: "features/**/*.feature",
                browser: "chrome",
                baseUrl: "http://localhost:5173"
            });
        }
    }
}