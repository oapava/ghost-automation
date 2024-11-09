const { Given, When, Then } = require('@cucumber/cucumber');
When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[type="email"]');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('input[type="password"]');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

When('I click on posts link', async function() {
    let element = await this.driver.$('a[data-test-nav="posts"]');
    return await element.click();
})

When('I click on new post button', async function() {
    //let element = await this.driver.$('span');
    let element = await this.driver.$(`//span[contains(text(), 'New post')]`);
    return await element.click();
})

When('I click on the title input', async function() {
    let element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.click();
})

When('I click on the content input', async function() {
    let element = await this.driver.$('div[class="kg-prose"]');
    return await element.click();
})

When('I click on publish button', async function() {
    let element = await this.driver.$('button[data-test-button="publish-flow"]');
    return await element.click();
})

When('I click on continue button', async function() {
    let element = await this.driver.$('button[data-test-button="continue"]');
    return await element.click();
})

When('I click on confirm button', async function() {
    let element = await this.driver.$('button[data-test-button="confirm-publish"]');
    return await element.click();
})

When('I click on view post', async function() {
    let element = await this.driver.$('a[data-test-complete-bookmark]');
    return await element.click();
})

When('I click on unsplash button', async function() {
    let element = await this.driver.$('.gh-editor-feature-image-unsplash');
    return await element.click();
})

When('I click on back posts list', async function() {
    let element = await this.driver.$('a[data-test-link="posts"]');
    return await element.click();
})

When('I click on preview button', async function() {
    let element = await this.driver.$('button[data-test-button="publish-preview"]');
    return await element.click();
})

When('I click on edit button of draft', async function() {
    let element = await this.driver.$('a.gh-post-list-button');
    return await element.click();
})

When('I click on a random link with text {string}', async function (text) {
    const elements = await this.driver.$$(`//a[contains(text(), '${text}')]`);
    const randomIndex = Math.floor(Math.random() * elements.length);
    await elements[randomIndex].click();
});

