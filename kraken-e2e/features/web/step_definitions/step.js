
const { Given, When, Then } = require('@cucumber/cucumber');

When('I login in ghost {kraken-string} {kraken-string}', async function (email, password){

    let element = await this.driver.$('input[type="email"]');
    await this.driver.pause(2000);
    await element.setValue(email);

    let element1 = await this.driver.$('input[type="password"]');
    await this.driver.pause(2000);
    await element1.setValue(password);


    let element3 = await this.driver.$('#ember5');
    await this.driver.pause(7000);
    return await element3.click();

});

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

When('I click on pages link', async function() {
    let element = await this.driver.$('a[data-test-nav="pages"]');
    return await element.click();
})

When('I return on posts links', async function() {
    let element = await this.driver.$('a[data-test-link="posts"]');
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

When('I click on view page', async function() {
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

When('I delete the post {string}', async function (postTitle) {
    const pageToDelete = await this.driver.$(`//h3[contains(@class, "gh-content-entry-title") and text()="${postTitle}"]`);
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


//Esenario 6
Given('I navigate to the posts section', async function () {
    await this.driver.url('http://localhost:2368/ghost/#/posts');
    let url = await this.driver.getUrl();
    if (!url.includes('/posts')) {
        throw new Error('Navigation to posts section failed');
    }
});

Given('I validate delete post publish available', async function () {
    try{
        let postList = await this.driver.$('a.gh-post-list-button');
        if (postList.length === 0) {
            console.log('No hay posts disponibles, pasando al siguiente escenario.');
            return 'skipped';
        }
        await postList.click();
        let settingsButton = await this.driver.$('button[data-test-psm-trigger]');
        await settingsButton.click();
        let panel = await this.driver.$('.settings-menu-pane-main');
        await panel.scrollIntoView();

        let deleteButton = await this.driver.$('button[data-test-button="delete-post"]');
        await deleteButton.click();
        let confirmDeleteButton = await this.driver.$('button[data-test-button="delete-post-confirm"]');
        await confirmDeleteButton.click();
    }catch(error) {
        console.log('Error al validar la existencia de posts:', error);
    }
});

//escenario 7
Given('I validate one post publish available', async function () {
    let postAvailable = await this.driver.$('a.gh-post-list-button');
    if (postAvailable.length === 0) {
        throw new Error('No posts available to delete');
    }
    await postAvailable.click();
});

Given('I delete post publish available', async function () {
    let optionButton = await this.driver.$('button[data-test-button="analytics-actions"]');
    await optionButton.click();
    let deleteButton = await this.driver.$('button[data-test-button="delete-post"]');
    await deleteButton.click();
    let confirmDeleteButton = await this.driver.$('button[data-test-button="delete-post-confirm"]');
    await confirmDeleteButton.click();
});

Then('I should be redirected to the posts page', async function () {
    let url = await this.driver.getUrl();
    if (!url.includes('/posts')) {
        throw new Error('Did not redirect to posts page');
    }
});

//Escenario 8
When('I click on new story', async function () {
    let element = await this.driver.$('a[data-test-nav="new-story"]');
    await element.click();
});

When('I close post', async function () {
    try{
        let element = await this.driver.$('button[data-test-button="close-publish-flow"]');
        await element.click();
    }catch(error) {
        console.log('Error al validar la existencia de posts:', error);
    }
});

When('I enter the post title {string}', async function (title) {
    let element = await this.driver.$('textarea[data-test-editor-title-input]');
    await element.setValue(title);
    await element.addValue('\n');
});

When('I open close the post settings panel', async function () {
    let settingsButton = await this.driver.$('button[data-test-psm-trigger]');
    await settingsButton.click();
});

When('I set the post visibility', async function () {
    let selectElement = await this.driver.$('select[data-test-select="post-visibility"]');
    await selectElement.selectByAttribute('value', 'members');
});

When('I publish the post', async function () {
    let publishButton = await this.driver.$('button[data-test-button="publish-flow"]');
    await publishButton.click();
    let continueButton = await this.driver.$('button[data-test-button="continue"]');
    await continueButton.click();
    let confirmButton = await this.driver.$('button[data-test-button="confirm-publish"]');
    await confirmButton.click();
});

//Escenario 9
When('I add an HTML card with content {string}', async function (htmlContent) {
    let addCardButton = await this.driver.$('button[aria-label="Add a card"]');
    await addCardButton.click();
    let htmlButton = await this.driver.$('button[data-kg-card-menu-item="HTML"]');
    await htmlButton.click();
    let htmlInput = await this.driver.$('div[class="cm-line"]');
    await htmlInput.setValue(htmlContent);
});

//Escenario 10
When('I click on new page', async function () {
    let newPageButton = await this.driver.$('a[data-test-new-page-button]');
    await newPageButton.click();
});

When('I enter the page title', async function () {
    let element = await this.driver.$('textarea[data-test-editor-title-input]');
    await element.waitForDisplayed();
    await element.setValue('Pagina de prueba HTML Nro 1');
    await element.addValue('\n');
});

When('I publish the page html', async function () {
    let publishButton = await this.driver.$('button[data-test-button="publish-flow"]');
    await publishButton.click();
    let continueButton = await this.driver.$('button[data-test-button="continue"]');
    await continueButton.click();
    let confirmButton = await this.driver.$('button[data-test-button="confirm-publish"]');
    await confirmButton.click();
});

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

When('I click on tags link', async function () {
    let element = await this.driver.$('a[data-test-nav="tags"]');
    return await element.click();
})

When('I Navigate to create a new tag', async function () {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
})

When('I enter tagname {string}', async function (tagname) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(tagname);
})

When('I save the tag', async function () {
    let element = await this.driver.$('button[data-test-button="save"]');
    return await element.click();
})

When('I click on Settings button', async function () {
    let element = await this.driver.$('button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]');
    return await element.click();
})


When('I select tag {string}', async function (tagname) {
    let element = await this.driver.$('input[class="ember-power-select-trigger-multiple-input"]');
    await element.setValue(tagname);
    const element1 = await this.driver.$('li[data-option-index="0"]');
    return await element1.click();
})

When('I navigate to Members Module', async function () {
    const memberModule = await this.driver.$('a[data-test-nav="members"]');
    return await memberModule.click();
})

When('I click on New Member', async function () {
    let element = await this.driver.$('a[href="#/members/new/"]');
    console.log(element);
    return await element.click();
})

When('I click to Members Module', async function () {
    let element = await this.driver.$('a[data-test-nav="members"]');
    return await element.click();
})

When('I enter member name {string}', async function (membername) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(membername);
})

When('I enter member email {string}', async function (memberemail) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(memberemail);
})

When('I save the new member', async function () {
    let element = await this.driver.$('button[data-test-button="save"]');
    return await element.click();
})

Then('The new member should be created {string}', async function (text) {
    const newMemberInList = await this.driver.$(`//p[contains(text(), "${text}" )]`);
    const isMemberCreated = await newMemberInList.isDisplayed();

    if (!isMemberCreated) {
        throw new Error('El nuevo member no fue creado correctamente.');
    }

    console.log('El nuevo member fue creado correctamente.');
});

When('I deleted the new member {string}', async function (memberemail) {
    const backToMembersLink = await this.driver.$('[data-test-link="members-back"]');
    await backToMembersLink.click();

    let memberSearch = await this.driver.$('input[data-test-input="members-search"]');
    await memberSearch.setValue(memberemail);

    let clickMemberSearch = await this.driver.$('a[data-test-table-data="details"]');
    await clickMemberSearch.click();

    let clickMembersAction = await this.driver.$('button[data-test-button="member-actions"]');
    await clickMembersAction.click();

    let clickDeleteMember = await this.driver.$('button[data-test-button="delete-member"]');
    await clickDeleteMember.click();

    let clickConfirmDelete = await this.driver.$('button[data-test-button="confirm"]');
    await clickConfirmDelete.click();

})

Then('The member should be deleted {string}', async function (text) {
    const newMemberInList = await this.driver.$(`//p[contains(text(), "${text}" )]`);
    const isMemberCreated = await newMemberInList.isDisplayed();

    if (isMemberCreated) {
        throw new Error('El nuevo member no fue eliminado correctamente.');
    }

    console.log('El nuevo member fue eliminado correctamente.');
})


When('I navigate to View Site', async function () {
    const viewSiteModule = await this.driver.$('a[data-test-nav="site"]');
    return await viewSiteModule.click();
})

Then('I should see the post with title {string}', async function (expectedTitle) {
    const postTitle = await browser.$('h1.post-title');
    const titleText = await postTitle.getText();

    assert.strictEqual(titleText, expectedTitle, `Expected title to be "${expectedTitle}", but got "${titleText}"`);
});

Then('I shouldn´t see the post with title {string}', async function (text) {
    const postDeleted = await this.driver.$(`//h3[contains(text(), "${text}" )]`);
    const isPostDeleted = await postDeleted.isDisplayed();

    if (isPostDeleted) {
        throw new Error('El draft del post no se elimino correctamente');
    }

    console.log('El draft del post se elimino correctamente');
})
