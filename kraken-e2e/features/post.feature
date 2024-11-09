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