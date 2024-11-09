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

When('I navigate to Pages module', async function () {
    const pagesModule = await this.driver.$('[data-test-nav="pages"]');
    await pagesModule.waitForDisplayed({ timeout: 5000 });
    await pagesModule.click();
});

When('I click on New Page', async function () {
    const newPageButton = await this.driver.$('[data-test-new-page-button]');
    await newPageButton.waitForDisplayed({ timeout: 5000 });
    await newPageButton.click();
});

When('I enter {string} as the title', async function (title) {
    const titleInput = await this.driver.$('.gh-editor-title');
    await titleInput.waitForDisplayed({ timeout: 5000 });
    await titleInput.waitForEnabled({ timeout: 5000 });
    await titleInput.setValue(title);
    await this.driver.pause(2000);
    const enteredTitle = await titleInput.getValue();
    if (enteredTitle !== title) {
        throw new Error(`El título ingresado es incorrecto. Esperado: ${title}, pero se obtuvo: ${enteredTitle}`);
    }
});


When('I add a YouTube link {string} to the page', async function (youtubeLink) {
    const droppableParagraph = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    await droppableParagraph.waitForDisplayed({ timeout: 5000 });
    await droppableParagraph.click();
    const addButton = await this.driver.$('[data-kg-plus-button="true"] button');
    await addButton.waitForDisplayed({ timeout: 5000 });
    await addButton.click();
    const youtubeButton = await this.driver.$('[data-kg-card-menu-item="YouTube"]');
    await youtubeButton.waitForDisplayed({ timeout: 5000 });
    await youtubeButton.scrollIntoView();
    await youtubeButton.click();
    const urlInput = await this.driver.$('input[data-testid="embed-url"]');
    await urlInput.waitForDisplayed({ timeout: 10000 });
    await urlInput.setValue(youtubeLink);
    await this.driver.keys('Enter');
});

When('I publish the page', async function () {
    await this.driver.pause(2000);
    const publishMenuTrigger = await this.driver.$('[data-test-button="publish-flow"]');
    await publishMenuTrigger.waitForDisplayed({ timeout: 5000 });
    await publishMenuTrigger.click();
    const continueButton = await this.driver.$('[data-test-button="continue"]');
    await continueButton.waitForDisplayed({ timeout: 5000 });
    await continueButton.click();
});

When('I perform the final review', async function () {
    await this.driver.pause(2000);
    const confirmPublishButton = await this.driver.$('[data-test-button="confirm-publish"]');
    await confirmPublishButton.waitForDisplayed({ timeout: 5000 });
    await confirmPublishButton.click();
    await this.driver.pause(2000);
});


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

When('I add HTML content {string} to the page', async function (htmlContent) {
    const droppableParagraph = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    await droppableParagraph.waitForDisplayed({ timeout: 5000 });
    await droppableParagraph.click();
    const addButton = await this.driver.$('[data-kg-plus-button="true"] button');
    await addButton.waitForDisplayed({ timeout: 5000 });
    await addButton.click();
    const HTMLButton = await this.driver.$('[data-kg-card-menu-item="HTML"]');
    await HTMLButton.waitForDisplayed({ timeout: 5000 });
    await HTMLButton.scrollIntoView();
    await HTMLButton.click();
    const contentArea = await this.driver.$('div.cm-content[contenteditable="true"]');
    await contentArea.waitForDisplayed({ timeout: 5000 });
    await contentArea.click();

    await contentArea.setValue(htmlContent);

    await this.driver.pause(1000);
});

When('I edit the recently created page', async function () {
    await this.driver.pause(2000);
    const pageToEdit = await this.driver.$('//h3[contains(@class, "gh-content-entry-title") and text()="My New Page Title"]');
    await pageToEdit.waitForDisplayed({ timeout: 5000 });

    if (await pageToEdit.isExisting()) {
        await pageToEdit.click();
    } else {
        throw new Error('No se encontró la página con el título "My New Page Title".');
    }
});

When('I change the title to {string}', async function (newTitle) {
    const titleInput = await this.driver.$('.gh-editor-title');
    await titleInput.waitForDisplayed({ timeout: 5000 });
    await titleInput.clearValue();
    await titleInput.setValue(newTitle);
    await this.driver.pause(1000);
});

When('I update the content with {string}', async function (newContent) {
    const htmlBlockContainer = await this.driver.$('div[data-kg-card="html"]');
    await htmlBlockContainer.waitForDisplayed({ timeout: 10000 });
    await htmlBlockContainer.click();
    await this.driver.pause(500);
    await htmlBlockContainer.click();
    await this.driver.pause(1500);

    const editableArea = await this.driver.$('div.cm-content[contenteditable="true"]');
    await editableArea.waitForDisplayed({ timeout: 10000 });

    await editableArea.click();
    await this.driver.pause(500);

    await this.driver.keys(['Control', 'a']);
    await this.driver.keys('Delete');

    await editableArea.addValue(newContent);
    await this.driver.pause(1000);
});

When('I update the page', async function () {
    const updateButton = await this.driver.$('[data-test-button="publish-save"]');
    await updateButton.waitForDisplayed({ timeout: 5000 });

    await this.driver.waitUntil(async () => {
        return await updateButton.isEnabled();
    }, {
        timeout: 5000,
        timeoutMsg: 'El botón de actualización no se habilitó en el tiempo esperado'
    });

    await updateButton.click();
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

When('I return pages', async function () {
    await this.driver.url('http://localhost:2368/ghost/#/dashboard');
    await this.driver.pause(200)
    await this.driver.keys(['Escape']);

    await this.driver.url('http://localhost:2368/ghost/#/pages');
});

When('I delete the page titled {string}', async function (pageTitle) {
    const pageToDelete = await this.driver.$(`//h3[contains(@class, "gh-content-entry-title") and text()="${pageTitle}"]`);
    await pageToDelete.waitForDisplayed({ timeout: 5000 });

    await pageToDelete.click({ button: 2 });

    const deleteMenuOption = await this.driver.$('[data-test-button="delete"]');
    await deleteMenuOption.waitForDisplayed({ timeout: 5000 });

    await deleteMenuOption.click();

    const confirmDeleteButton = await this.driver.$('[data-test-button="confirm"]');
    await confirmDeleteButton.waitForDisplayed({ timeout: 5000 });
    await confirmDeleteButton.click();

    await this.driver.pause(2000);
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

When('I navigate to Tags module', async function () {
    const pagesModule = await this.driver.$('[data-test-nav="tags"]');
    await pagesModule.waitForDisplayed({ timeout: 5000 });
    await pagesModule.click();
});

When('I click on New Tag', async function () {
    const newTagButton = await this.driver.$('a[href="#/tags/new/"].gh-btn-primary');

    await newTagButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'El botón "New Tag" no está visible en el tiempo esperado' });
    await newTagButton.waitForClickable({ timeout: 5000, timeoutMsg: 'El botón "New Tag" no es clickeable' });

    await newTagButton.click();
});

When('I fill in the required fields for a new tag', async function () {
    const nameInput = await this.driver.$('[data-test-input="tag-name"]');
    await nameInput.setValue('New Tag Name');

    const colorInput = await this.driver.$('[data-test-input="accentColor"]');
    await colorInput.setValue('FF5733');

    const slugInput = await this.driver.$('[data-test-input="tag-slug"]');
    await slugInput.setValue('new-tag-slug');

    const descriptionInput = await this.driver.$('[data-test-input="tag-description"]');
    await descriptionInput.setValue('This is a description for the new tag.');

    await this.driver.pause(1000);
});

When('I save the new tag', async function () {
    const saveButton = await this.driver.$('[data-test-button="save"]');

    await saveButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'El botón "Save" no está visible en el tiempo esperado' });
    await saveButton.waitForClickable({ timeout: 5000, timeoutMsg: 'El botón "Save" no es clickeable' });

    await saveButton.click();
});

Then('the new tag should be created', async function () {
    const backToTagsLink = await this.driver.$('[data-test-link="tags-back"]');
    await backToTagsLink.click();

    await this.driver.pause(1000);

    const newTagInList = await this.driver.$('//h3[contains(text(), "New Tag Name")]');
    const isTagCreated = await newTagInList.isDisplayed();

    if (!isTagCreated) {
        throw new Error('El nuevo tag no fue creado correctamente.');
    }

    console.log('El nuevo tag fue creado correctamente.');
});
