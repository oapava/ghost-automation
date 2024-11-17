Feature: Creación de Post
@user1 @web
#Escenario 1: Crear un Post con un título y guardar este nuevo post
Scenario: 1. Crear un Post con un título y guardar este nuevo post
  Given I navigate to page "<URLBASE>"
  And I login in ghost "<USERNAME>" "<PASSWORD>"
  When I click on posts link using 4.5
  And I wait for 2 seconds
  And I click on new post button
  And I click on the title input
  And I enter text "Título desde Kraken 1"
  And I wait for 2 seconds
  And I click on the content input
  And I click on publish button
  And I click on confirm button
  And I wait for 1 seconds
  And I click on view post
  Then I should see the post with title "Título desde Kraken 1"

@user2 @web
Scenario: 2. Crear un Post con un contenido en markdown y guardar este nuevo post
  Given I navigate to page "<URLBASE>"
  And I wait for 5 seconds
  And I login in ghost "<USERNAME>" "<PASSWORD>"
  And I click on posts link using 4.5
  And I wait for 2 seconds
  And I click on new post button
  And I click on the content input
  When I enter text "**Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper.**"
  And I click on the title input
  And I click on publish button
  And I click on confirm button
  And I wait for 1 seconds
  And I click on view post
  Then I should see the post with text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper."

  @user3 @web
  Scenario: 3. Crear un Post en draft y agregar contenido en markdown y guardar este nuevo post
    Given I navigate to page "<URLBASE>"
    And I wait for 5 seconds
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    And I click on posts link using 4.5
    And I wait for 2 seconds
    And I click on new post button
    And I click on the title input
    And I enter text "Título desde Kraken error"
    And I click on the posts button
    And I click on posts link using 4.5
    And I click on edit button of draft "Título desde Kraken error"
    And I click on the content input
    When I enter text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper."
    And I click on the title input
    And I delete text
    And I enter text "Título desde Kraken 3"
    And I wait for 3 seconds
    And I click on publish button
    And I click on confirm button
    And I wait for 1 seconds
    And I click on view post
    Then I should see the post with title "Título desde Kraken 3" and content "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut erat at massa sagittis posuere nec ac elit. Maecenas hendrerit ante non sapien sollicitudin, sed aliquam purus semper."

  @user4 @web
  Scenario: 4. Eliminar post publicado en version 4.5
    Given I navigate to page "<URLBASE>"
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    And I click on posts link using 4.5
    And I wait for 2 seconds
    And I click on new post button
    And I click on the title input
    And I enter text "Publish post and deleted"
    And I wait for 2 seconds
    And I click in text input 4.5
    And I wait for 3 seconds
    And I publish in version 4.5 the post
    And I wait for 5 seconds
    And I click in settings
    And I wait for 5 seconds
    And I delete and confirm the post deletion
    Then I shouldn´t see the post with title "Publish post and deleted"

  @user5 @web
  Scenario: Escenario 9. Crear Post con contenido HTML
    Given I navigate to page "<URLBASE>"
    And I wait for 5 seconds
    And I login in ghost "<USERNAME>" "<PASSWORD>"
    And I click on posts link using 4.5
    And I wait for 2 seconds
    And I click on new post button
    And I click on the title input
    When I enter text "Post para HTML"
    And I click in text input 4.5
    And I wait for 2 seconds
    And I add an HTML card in 4.5 version "<h2>Prueba texto en post</h2>"
    And I publish in version 4.5 the post
    And I wait for 1 seconds
    And I click on view post
    And I wait for 5 seconds
    Then I should see the title "Post para HTML" and html "Prueba texto en post" description in the post