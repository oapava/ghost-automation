const {Then} = require("@cucumber/cucumber");

var assert = require('assert-plus');

Then('I click on the created post titled {string}', async function (pageTitle) {
    const postLink = await this.driver.$(`a[title="View post: ${pageTitle}"]`);

    await postLink.scrollIntoView();
    await postLink.waitForDisplayed({ timeout: 10000 });
    await postLink.waitForClickable({ timeout: 10000 });

    await postLink.click();

    await this.driver.waitUntil(async () => {
        const url = await this.driver.getUrl();
        return url.includes(pageTitle.toLowerCase().replace(/\s+/g, '-'));
    }, { timeout: 10000, timeoutMsg: 'La navegación a la nueva página no se completó.' });

    console.log(`Se ha hecho clic en el post titulado "${pageTitle}" y se ha navegado a la nueva página.`);
});

Then('I should see the new page', async function () {
    const youtubeIframe = await this.driver.$('iframe[src*="youtube.com"]');

    if (!await youtubeIframe.isExisting()) {
        throw new Error('El video de YouTube no se encuentra en la página.');
    }

    await youtubeIframe.waitForDisplayed({ timeout: 15000 });

    if (!await youtubeIframe.isDisplayed()) {
        throw new Error('El video de YouTube no está visible en la página.');
    }

    console.log('El video de YouTube está presente en la página.');
});

Then('I open page updated', async function () {
    const viewPostLink = await this.driver.$('.gh-editor-post-status .view-post');
    await viewPostLink.waitForDisplayed({ timeout: 5000 });
    await viewPostLink.click();
    const windows = await this.driver.getWindowHandles();
    await this.driver.switchToWindow(windows[windows.length - 1]);

    console.log('La página se abrió correctamente.');
});

Then('I should see the updated page with the new title and content', async function () {

    const windows = await this.driver.getWindowHandles();
    await this.driver.switchToWindow(windows[windows.length - 1]);

    const updatedTitle = await this.driver.$('h1');
    const updatedContent = await this.driver.$('p');

    if (await updatedTitle.getText() !== 'Updated Page Title') {
        throw new Error('El título actualizado no es visible.');
    }

    if (await updatedContent.getText() !== 'New paragraph.') {
        throw new Error('El contenido actualizado no es visible.');
    }

    console.log('La página fue actualizada correctamente.');
});

Then('I should see the title {string} and html {string} description in the post', async function (title, html) {

    const windows = await this.driver.getWindowHandles();
    await this.driver.switchToWindow(windows[windows.length - 1]);

    const updatedTitle = await this.driver.$('h1');
    const updatedContent = await this.driver.$('h2');

    if (await updatedTitle.getText() !== title) {
        throw new Error('El título actualizado no es visible.');
    }

    if (await updatedContent.getText() !== html) {
        throw new Error('El contenido actualizado no es visible.');
    }

    console.log('La página con html fue creada exitosamente.');
});

Then('I should see the tag {string} in the post', async function (tagName) {

    const windows = await this.driver.getWindowHandles();
    await this.driver.switchToWindow(windows[windows.length - 1]);

    const updatedTag = await this.driver.$('a[class="gh-article-tag"]');

    assert.equal(await updatedTag.getText(),tagName.toUpperCase(),'El tag no coincide');

    console.log('El post fue creada exitosamente.');
});

Then('I should see the title {string} and html {string} description in the page', async function (title, html) {

    const windows = await this.driver.getWindowHandles();
    await this.driver.switchToWindow(windows[windows.length - 1]);

    const updatedTitle = await this.driver.$('h1');
    const updatedContent = await this.driver.$('h2');

    if (await updatedTitle.getText() !== title) {
        throw new Error('El título actualizado no es visible.');
    }

    if (await updatedContent.getText() !== html) {
        throw new Error('El contenido actualizado no es visible.');
    }

    console.log('La página con html fue creada exitosamente.');
});

Then('The page with the title site should be {string}', async function(expectedTitle) {
    await this.driver.url('http://localhost:2368/');

    let titleElement = await this.driver.$('a.gh-navigation-logo.is-title');
    let actualTitle = await titleElement.getText();

    if (actualTitle !== expectedTitle) {
        throw new Error(`Title mismatch: expected "${expectedTitle}", but got "${actualTitle}"`);
    }
});

Then('I should see the post with title {string}', async function (expectedTitle) {
    const windows = await this.driver.getWindowHandles();
    await this.driver.switchToWindow(windows[windows.length - 1]);
    const postTitle = await this.driver.$('h1.gh-article-title.is-title');
    const titleText = await postTitle.getText();

    if (titleText !== expectedTitle) {
        throw new Error(`Expected title to be "${expectedTitle}", but got "${titleText}"`);
    }
});

Then('I should see the post with text {string}', async function (expectedText) {
    const windows = await this.driver.getWindowHandles();
    await this.driver.switchToWindow(windows[windows.length - 1]);
    const postText = await this.driver.$('section.gh-content p strong');
    const text = await postText.getText();

    if (text !== expectedText) {
        throw new Error(`Expected text to be "${expectedText}", but got "${text}"`);
    }
});

Then('I shouldn´t see the post with title {string}', async function (text) {
    const postDeleted = await this.driver.$(`//h3[contains(text(), "${text}" )]`);
    const isPostDeleted = await postDeleted.isDisplayed();

    if (isPostDeleted) {
        throw new Error('El draft del post no se elimino correctamente');
    }

    console.log('El draft del post se elimino correctamente');
})

Then('I should see the post with title {string} and an Unsplash image', async function (expectedTitle) {
    const windows = await this.driver.getWindowHandles();
    await this.driver.switchToWindow(windows[windows.length - 1]);

    await this.driver.pause(2000);

    const postTitleElement = await this.driver.$('h1.gh-article-title.is-title');
    const titleText = await postTitleElement.getText();

    if (titleText !== expectedTitle) {
        throw new Error(`Expected title to be "${expectedTitle}", but got "${titleText}"`);
    }

    const postImage = await this.driver.$('figure.gh-article-image img[src*="images.unsplash.com"]');
    const imageExists = await postImage.isExisting();

    if (!imageExists) {
        throw new Error('Expected an Unsplash image in the post, but none was found.');
    }
});

Then('I should see the post with title {string} and content {string}', async function (expectedTitle, expectedContent) {
    const windows = await this.driver.getWindowHandles();
    await this.driver.switchToWindow(windows[windows.length - 1]);

    await this.driver.pause(2000);

    const postTitleElement = await this.driver.$('h1.gh-article-title.is-title');
    const titleText = await postTitleElement.getText();
    if (titleText !== expectedTitle) {
        throw new Error(`Expected title to be "${expectedTitle}", but got "${titleText}"`);
    }

    const postContentElement = await this.driver.$('section.gh-content p');
    const contentText = await postContentElement.getText();
    if (contentText !== expectedContent) {
        throw new Error(`Expected content to be "${expectedContent}", but got "${contentText}"`);
    }
});

Then('I expect to see tag {string}', async function (expectedText) {
    const elementSelector = '.gh-tag-list-name';
    const element = await this.driver.$(elementSelector);
    const actualText = await element.getText();

    assert.ok(actualText.includes(expectedText),`Expected to find text "${expectedText}" in element "${elementSelector}", but found "${actualText}"`)

});

Then('I should see that the page {string} is deleted', async function (pageTitle) {
    const pageExists = await this.driver.$(`//h3[contains(@class, "gh-content-entry-title") and text()="${pageTitle}"]`).isExisting();

    if (pageExists) {
        throw new Error(`La página con título "${pageTitle}" aún existe después de intentar eliminarla.`);
    }

    console.log(`La página con título "${pageTitle}" se ha eliminado correctamente.`);
});

Then('I verify that no YouTube videos or links are visible', async function () {
    const youtubeLinks = await this.driver.$$('a[href*="youtube.com"]');
    const embeddedVideos = await this.driver.$$('iframe[src*="youtube.com"]');

    if (youtubeLinks.length > 0 || embeddedVideos.length > 0) {
        throw new Error('Se encontraron enlaces o videos de YouTube en la página de error');
    }

    console.log('La página de error se mostró correctamente y no hay videos ni enlaces de YouTube.');
});

Then('The member should be deleted {string}', async function (text) {
    const newMemberInList = await this.driver.$(`//p[contains(text(), "${text}" )]`);
    const isMemberCreated = await newMemberInList.isDisplayed();

    if (isMemberCreated) {
        throw new Error('El nuevo member no fue eliminado correctamente.');
    }

    console.log('El nuevo member fue eliminado correctamente.');
})

Then('I should be redirected to the pages page', async function () {
    let url = await this.driver.getUrl();
    if (!url.includes('/pages')) {
        throw new Error('Did not redirect to pages page');
    }
});

Then('The page with the tag should be created {string}', async function (text) {
    const newtagInpost = await this.driver.$(`//span[contains(text(), "${text}" )]`);
    const istagPostCreated = await newtagInpost.isDisplayed();

    if (!istagPostCreated) {
        throw new Error('El nuevo post con el tag no fue creado correctamente.');
    }

    console.log('El nuevo post con el tag fue creado correctamente.');
})

Then('The post with the tag should be created {string}', async function (text) {
    const newtagInpage = await this.driver.$(`//span[contains(text(), "${text}" )]`);
    const istagPageCreated = await newtagInpage.isDisplayed();

    if (!istagPageCreated) {
        throw new Error('la nueva post con el tag no fue creado correctamente.');
    }

    console.log('la nueva page con el tag fue creado correctamente.');
})

Then('The new member should be created {string}', async function (text) {
    const newMemberInList = await this.driver.$(`//p[contains(text(), "${text}" )]`);
    const isMemberCreated = await newMemberInList.isDisplayed();

    if (!isMemberCreated) {
        throw new Error('El nuevo member no fue creado correctamente.');
    }

    console.log('El nuevo member fue creado correctamente.');
});

Then('I should be redirected to the posts page', async function () {
    let url = await this.driver.getUrl();
    if (!url.includes('/posts')) {
        throw new Error('Did not redirect to posts page');
    }
});
