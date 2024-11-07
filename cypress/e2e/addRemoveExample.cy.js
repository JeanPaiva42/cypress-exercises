const { selectsAddRemoveExample } = require('../../actions/mainPage/index')
const { addButtonToPage, removeButtonFromPage } = require('../../actions/addRemoveExamplePage/index')
const AddRemoveExamplePage = require('../../pageComponents/examplePages/addRemoveExample.js')

describe('Add/Remove Button Example', () => {
  const addRemoveExamplePage = new AddRemoveExamplePage(cy);

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/',
      {
        headers: {
          'accept': 'application/json, text/plain, */*',
          'user-agent': 'axios/0.27.2'
        }
      })
  })

  it('adds a button to the example page', () => {
    selectsAddRemoveExample(cy);
    addButtonToPage(cy);

    addRemoveExamplePage.removeElementButton.should('be.exist');
  })

  it('removes a button to the example page', () => {


    selectsAddRemoveExample(cy);
    addButtonToPage(cy);
    removeButtonFromPage(cy);

    addRemoveExamplePage.removeElementButton.should('not.be.exist');
  })
})
