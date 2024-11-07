const { selectsDynamicContentExample } = require('../../actions/mainPage/index')

const DynamicContentExamplePage = require('../../pageComponents/examplePages/dynamicContentExample.js')

describe('Dynamic Content Example Page', () => {
  const dynamicContentExamplePage = new DynamicContentExamplePage(cy);

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/',
      {
        headers: {
          'accept': 'application/json, text/plain, */*',
          'user-agent': 'axios/0.27.2'
        }
      })



  })


  it('verifies that content table and items exist', () => {

    selectsDynamicContentExample(cy);

    dynamicContentExamplePage.contentTable.should('be.exist');
    dynamicContentExamplePage.tableItem.should('be.exist');
  })

})
