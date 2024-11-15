Feature: Creación de Post
@user1 @web
Scenario: 1. Crear un Post con un título y guardar este nuevo post
  # Escenario 1: Crear un Post con un título y guardar este nuevo post
  Given I navigate to page "<URLBASE>"
  And I login in ghost "<USERNAME>" "<PASSWORD>"
  When I click on posts link
  And I wait for 2 seconds
  And I click on new post button
  And I click on the title input
  And I enter text "Título desde Kraken 1"
  And I wait for 2 seconds
  And I click on the content input
  And I click on publish button
  And I click on continue button
  And I click on confirm button
  And I wait for 7 seconds
  And I click on view post
  Then I should see the post with title "Título desde Kraken 1"

@user2 @web
  Scenario: 2. Crear un Post con un contenido en markdown y guardar este nuevo post
  Given I navigate to page "<URLBASE>"
  And I wait for 5 seconds
  And I login in ghost "<USERNAME>" "<PASSWORD>"
  And I click on posts link
  And I wait for 2 seconds
  And I click on new post button
  And I click on the content input
  When I enter text "**Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper.**"
  And I click on the title input
  And I click on publish button
  And I click on continue button
  And I click on confirm button
  And I wait for 7 seconds
  And I click on view post
  Then I should see the post with text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper."

  @user3 @web
  Scenario: 3. Crear un Post en draft y agregar contenido en markdown y guardar este nuevo post
  Given I navigate to page "<URLBASE>"
  And I wait for 5 seconds
  And I login in ghost "<USERNAME>" "<PASSWORD>"
  And I click on posts link
  And I wait for 2 seconds
  And I click on new post button
  And I click on the title input
  And I enter text "Título desde Kraken error"
  And I click on the posts button
  And I click on posts link
  And I click on edit button of draft
  And I click on the content input
  When I enter text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper."
  And I click on the title input
  And I delete text
  And I enter text "Título desde Kraken 3"
  And I wait for 3 seconds
  And I click on publish button
  And I click on continue button
  And I click on confirm button
  And I wait for 7 seconds
  And I click on view post
  Then I should see the post with title "Título desde Kraken 3" and content "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper."


  @user4 @web
  Scenario: 4. Crear un Post con una imagen de Unsplash y guardar este nuevo post
  Given I navigate to page "<URLBASE>"
  And I wait for 5 seconds
  And I login in ghost "<USERNAME>" "<PASSWORD>"
  And I click on posts link
  And I wait for 2 seconds
  And I click on new post button
  And I click on unsplash button
  And I wait for 5 seconds
  When I click on a random link with text "Insert image"
  And I click on the title input
  And I enter text "Título desde Kraken 4"
  And I wait for 3 seconds
  And I click on publish button
  And I click on continue button
  And I click on confirm button
  And I wait for 7 seconds
  And I click on view post
  Then I should see the post with title "Título desde Kraken 4" and an Unsplash image

  @user5 @web
  Scenario: 5. Crear un Post con un contenido y título despues guardar este nuevo post
  Given I navigate to page "<URLBASE>"
  And I wait for 5 seconds
  And I login in ghost "<USERNAME>" "<PASSWORD>"
  And I click on posts link
  And I wait for 2 seconds
  And I click on new post button
  And I click on the title input
  And I enter text "Título desde Kraken 5"
  And I click on the content input
  When I enter text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper."
  And I click on the title input
  And I click on publish button
  And I click on continue button
  And I click on confirm button
  And I wait for 7 seconds
  And I click on view post
  Then I should see the post with title "Título desde Kraken 5" and content "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper."

  @user6 @web
  Scenario: 6. Eliminar post creado
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    And I click on posts link
    And I wait for 2 seconds
    And I click on new post button
    And I click on the title input
    And I enter text "Draft para eliminar"
    And I wait for 2 seconds
    And I click on the content input
    And I wait for 10 seconds
    And I return on posts links
    And I wait for 5 seconds
    When I delete the post "Draft para eliminar"
    Then I shouldn´t see the post with title "Draft para eliminar"

  @user7 @web
  Scenario: 7. Eliminar post publicado
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    And I click on posts link
    And I wait for 2 seconds
    And I click on new post button
    And I click on the title input
    And I enter text "Publish post and deleted"
    And I wait for 2 seconds
    And I click on the content input
    And I wait for 10 seconds
    And I publish the post
    And I wait for 5 seconds
    And I click on posts link
    And I wait for 5 seconds
    When I delete the post "Publish post and deleted"
    Then I shouldn´t see the post with title "Publish post and deleted"

  @user8 @web
  Scenario: Escenario 8 - Crear Post para que solo sea visible para miembros
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/dashboard"
    And I click on new story
    When I enter the post title "Post de prueba miembros Nro 1"
    And I open close the post settings panel
    And I set the post visibility
    And I open close the post settings panel
    And I publish the post
    And I wait for 2 seconds
    And I close post
    Then I should be redirected to the posts page

  @user9 @web
  Scenario: Escenario 9. Crear Post con contenido HTML
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/dashboard"
    And I click on posts link
    And I wait for 2 seconds
    And I click on new post button
    When I enter the post title "Post para HTML"
    And I wait for 2 seconds
    And I add an HTML card with content "<h2>Prueba texto en post</h2>"
    And I publish the post
    And I wait for 4 seconds
    And I click on view post
    And I wait for 5 seconds
    Then I should see the title "Post para HTML" and html "Prueba texto en post" description in the post

  @user10 @web
  Scenario: Escenario 10 - Crear página con contenido HTML
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/dashboard"
    And I click on pages link
    And I wait for 2 seconds
    When I click on new page
    And I enter the page title
    And I wait for 2 seconds
    And I add an HTML card with content "<h2> Prueba texto pagina </h2>"
    And I publish the page html
    And I wait for 4 seconds
    And I click on view page
    And I wait for 4 seconds
    Then I should see the title "Pagina de prueba HTML Nro 1" and html "Prueba texto pagina" description in the page

  @user11 @web
  Scenario: Crear y publicar una página con un video de YouTube
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    And I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click next
    And I wait for 7 seconds
    When I navigate to Pages module
    And I click on New Page
    And I enter "My Page Title" as the title
    And I add a YouTube link "https://www.youtube.com/watch?v=x91MPoITQ3I" to the page
    And I publish the page
    And I perform the final review
    And I click on the created post titled "My Page Title"
    Then I should see the new page

  @user12 @web
  Scenario:Crear y actualizar una página en Ghost
    Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
    And I navigate to Pages module
    And I click on New Page
    And I enter "My New Page Title" as the title
    And I add HTML content "<h1>Welcome to my page</h1><p>This is some content.</p>" to the page
    And I publish the page
    And I perform the final review
    And I navigate to Pages module
    When I edit the recently created page
    And I change the title to "Updated Page Title"
    And I update the content with "<h1>Updated content</h1><p>New paragraph.</p>"
    And I update the page
    And I open page updated
    Then I should see the updated page with the new title and content

  @user13 @web
  Scenario:Crear, publicar y eliminar una nueva página en Ghost
    Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
    And I navigate to Pages module
    And I click on New Page
    And I enter "Page to delete" as the title
    When I add a YouTube link "https://youtube.com/example" to the page
    And I publish the page
    And I perform the final review
    And I return pages
    And I delete the page titled "Page to delete"
    Then I should see that the page "Page to delete" is deleted

  @user14 @web
  Scenario:Crear pagina con link de youtube invalido
    Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
    And I navigate to Pages module
    And I click on New Page
    And I enter "Page error link" as the title
    When I add a YouTube link "https://youtub" to the page
    And I publish the page
    And I perform the final review
    And I click on the created post titled "Page error link"
    Then I verify that no YouTube videos or links are visible

  @user15 @web
  Scenario:
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    And  I navigate to Tags module
    When I click on New Tag
    And I fill in the required fields for a new tag
    And I save the new tag
    And I navigate to Tags module
    Then I expect to see tag "New Tag Name"

  @user16 @web
  Scenario: Crear tag y crear un post asignandole la tag creada
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    And I navigate to Tags module
    When I click on New Tag
    And I enter tagname "Test-tag1"
    And I save the new tag
    And I wait for 5 seconds
    And I click on posts link
    And I wait for 2 seconds
    And I click on new post button
    And I click on the title input
    And I enter text "Título-para-crear-tag"
    And I click on the content input
    And I enter text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper."
    And I click on the title input
    And I click on Settings button
    And I select tag "Test-tag1"
    And I wait for 6 seconds
    And I click on publish button
    And I click on continue button
    And I click on confirm button
    And I click on view post
    And I wait for 5 seconds
    Then I should see the tag "Test-tag1" in the post

  @user17 @web
  Scenario: Crear page con tag
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    When I navigate to Pages module
    And I click on New Page
    And I enter "My-Page-Title-tag" as the title
    And I click on Settings button
    And I select tag "Test-tag1"
    And I wait for 6 seconds
    And I publish the page
    And I perform the final review
    Then I navigate to Pages module
    And The page with the tag should be created "Test-tag1"


  @user18 @web
  Scenario: Crear Member
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    When I navigate to Members Module
    And I click on New Member
    And I enter member name "Pablo Rivera"
    And I enter member email "p.riverah@uniandes.edu.co"
    And I save the new member
    And I navigate to Members Module
    And I wait for 5 seconds
    Then I navigate to Members Module
    And The new member should be created "p.riverah@uniandes.edu.co"

  @user19 @web
  Scenario:  Crear y eliminar Member
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>""
    When I navigate to Members Module
    And I click on New Member
    And I wait for 5 seconds
    And I enter member name "Pedro Lorenzo"
    And I enter member email "test@hotmail.com"
    And I save the new member
    And I deleted the new member "test@hotmail.com"
    Then I navigate to Members Module
    And The member should be deleted "test@hotmail.com"

  @user20 @web
  Scenario: Cambiar nombre de sitio web
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    When I navigate to configuration
    And I click on edit button
    And I select new title "Updated title site" to site
    And I save changes to of site
    Then The page with the title site should be "Updated title site"
