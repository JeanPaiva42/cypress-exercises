const { selectsDownloadExample } = require('../../actions/mainPage/index')
const { clicksInFirstLink } = require('../../actions/downloadExamplePage/index.js')

const DownloadExamplePage = require('../../pageComponents/examplePages/downloadExample.js')

const downloadExamplePage = new DownloadExamplePage(cy);

describe('Download Example Page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/',
      {
        headers: {
          'accept': 'application/json, text/plain, */*',
          'user-agent': 'axios/0.27.2'
        }
      })

    selectsDownloadExample(cy);
  })

  it('verifies that we have files to be downloaded in the page', () => {
    const downloadPageHeader = 'File Downloader'


    downloadExamplePage.filesHeader.should('be.exist', downloadPageHeader);
  })

  it('verifies that a file was downloaded', () => {


    clicksInFirstLink();
    downloadExamplePage.firstDowloadableLink.invoke('text').then((linkText) =>

      cy.readFile(`${Cypress.config('downloadsFolder')}/${linkText}`).should('exist'))
  });
});

