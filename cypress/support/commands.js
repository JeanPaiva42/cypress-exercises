require('@4tw/cypress-drag-drop');
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('dragAndDrop', (sourceElement, targetElement) => {
  const dataTransfer = new DataTransfer();

  sourceElement
    .trigger('mousedown', { which: 1, button: 0, force: true })
    .trigger('dragstart', { dataTransfer, force: true });

  targetElement
    .trigger('dragover', { dataTransfer, force: true })
    .trigger('drop', { dataTransfer, force: true });

  sourceElement.trigger('mouseup', { force: true });
});