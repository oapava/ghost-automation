const {Given} = require("@cucumber/cucumber");

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