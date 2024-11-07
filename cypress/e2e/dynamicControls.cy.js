const { selectsDynamicControlsExample } = require('../../actions/mainPage/index')
const { clicksOnAddCheckboxButton, clicksOnCheckboxInput, clicksOnRemoveCheckboxButton, disablesTextInputField, enablesTextInputField, typesInInputField, waitsForAction } = require('../../actions/dynamicControlExamplePage/index.js')
const DynamicControlsExamplePage = require('../../pageComponents/examplePages/dynamicControlsExample.js')
const dynamicControlsExamplePage = new DynamicControlsExamplePage(cy);

describe('Dynamic Controls Example Page', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/',
      {
        headers: {
          'accept': 'application/json, text/plain, */*',
          'user-agent': 'axios/0.27.2'
        }
      })

    selectsDynamicControlsExample(cy);

  })

  it('verifies that the remove checkbox button is available and no checkbox is to be seen', () => {

    // The page starts on the Remove button state
    clicksOnRemoveCheckboxButton(cy);

    dynamicControlsExamplePage.checkboxInput.should('not.be.exist');
  })

  it('verifies that a checkbox input is created in the page', () => {

    // The page starts on the Remove button state
    clicksOnRemoveCheckboxButton(cy);
    waitsForAction(cy);
    clicksOnAddCheckboxButton(cy);

    dynamicControlsExamplePage.checkbox.should('be.visible');
  })

  it('verifies that a checkbox can be activated', () => {


    clicksOnCheckboxInput(cy);

    dynamicControlsExamplePage.checkboxInput.should('be.checked');
  })

  it('verifies that the textinput is enabled', () => {

    // Verifies that we start with the input disabled
    dynamicControlsExamplePage.textInputField.should('be.disabled');

    enablesTextInputField(cy);

    dynamicControlsExamplePage.textInputField.should('be.enabled');
  })

  it('types in text input field and then disables the input', () => {
    const testingString = 'how strange it is to be anything at all';

    enablesTextInputField(cy);
    typesInInputField(testingString);

    disablesTextInputField(cy);

    dynamicControlsExamplePage.textInputField.should('be.disabled');
    dynamicControlsExamplePage.textInputField.should('have.value', testingString);
  })

})

