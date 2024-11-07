const { selectsShadowDOMExample } = require('../../actions/mainPage/index')

const ShadowDOMExamplePage = require('../../pageComponents/examplePages/shadowDOMExample.js')
const shadowDOMExamplePage = new ShadowDOMExamplePage(cy);

describe('Shadow DOM Example Page', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/',
      {
        headers: {
          'accept': 'application/json, text/plain, */*',
          'user-agent': 'axios/0.27.2'
        }
      })
  })

  it('accesses shadow DOM on the example page', () => {

    const shadowDOMText = 'Let\'s have some different text!'
    selectsShadowDOMExample(cy);
    shadowDOMExamplePage.shadowDOMFirstTemplate.shadow()
      .get('span').should('have.text', shadowDOMText);
  })
});

