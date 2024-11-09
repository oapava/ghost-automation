Feature: Creación de Post

@user1 @web
Scenario: Crear un Post con un título y guardar este nuevo post
  # Escenario 1: Crear un Post con un título y guardar este nuevo post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I click on posts link
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

  # Escenario 2: Crear un Post con un contenido en markdown y guardar este nuevo post
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 5 seconds
  And I click on posts link
  And I wait for 2 seconds
  And I click on new post button
  And I click on the content input
  And I enter text "**Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper.**"
  And I click on the title input
  And I click on publish button
  And I click on continue button
  And I click on confirm button
  And I wait for 7 seconds
  And I click on view post

  # Escenario 3: Tomar un Post en draft y agregar contenido en markdown y guardar este nuevo post
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 5 seconds
  And I click on posts link
  And I wait for 2 seconds
  And I click on edit button of draft
  And I click on the content input
  And I enter text "**Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper.**"
  And I click on the title input
  And I enter text "Título desde Kraken 3"
  And I wait for 3 seconds
  And I click on preview button
  And I wait for 7 seconds
  And I click on back posts list

  # Escenario 4: Crear un Post con una imagen de Unsplash y guardar este nuevo post
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 5 seconds
  And I click on posts link
  And I wait for 2 seconds
  And I click on new post button
  And I click on unsplash button
  And I wait for 5 seconds
  And I click on a random link with text "Insert image"
  And I click on the title input
  And I enter text "Título desde Kraken 4"
  And I wait for 3 seconds
  And I click on preview button
  And I wait for 7 seconds
  And I click on back posts list

  # Escenario 5: Crear un Post con un contenido y título despues guardar este nuevo post
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 5 seconds
  And I click on posts link
  And I wait for 2 seconds
  And I click on new post button
  And I click on the title input
  And I enter text "Título desde Kraken 4"
  And I click on the content input
  And I enter text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper."
  And I click on the title input
  And I click on publish button
  And I click on continue button
  And I click on confirm button
  And I wait for 7 seconds
  And I click on view post

  #Escenario 11: Crear y publicar una página con un video de YouTube
  @user3 @web
  Scenario: Crear y publicar una página con un video de YouTube
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    When I enter email "<USERNAME>"
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

    #Escenario 12: y actualizar una página en Ghost
    Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
    And I navigate to Pages module
    And I click on New Page
    And I enter "My New Page Title" as the title
    And I add HTML content "<h1>Welcome to my page</h1><p>This is some content.</p>" to the page
    And I publish the page
    And I perform the final review
    And I navigate to Pages module
    And I edit the recently created page
    And I change the title to "Updated Page Title"
    And I update the content with "<h1>Updated content</h1><p>New paragraph.</p>"
    And I update the page
    And I open page updated
    Then I should see the updated page with the new title and content

    #Escenario 13:Crear, publicar y eliminar una nueva página en Ghost
    Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
    And I navigate to Pages module
    And I click on New Page
    And I enter "Page to delete" as the title
    And I add a YouTube link "https://youtube.com/example" to the page
    And I publish the page
    And I perform the final review
    And I return pages
    And I delete the page titled "Page to delete"
    Then I should see that the page "Page to delete" is deleted

    #Escenario 14:Crear pagina con link de youtube invalido
    Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
    And I navigate to Pages module
    And I click on New Page
    And I enter "Page error link" as the title
    And I add a YouTube link "https://youtub" to the page
    And I publish the page
    And I perform the final review
    And I click on the created post titled "Page error link"
    Then I verify that no YouTube videos or links are visible

    #Escenario 15: Crear un tag
    Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
    And  I navigate to Tags module
    And I click on New Tag
    And I fill in the required fields for a new tag
    And I save the new tag
    Then  the new tag should be created

