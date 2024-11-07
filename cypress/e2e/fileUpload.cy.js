const { selectsUploadExample } = require('../../actions/mainPage/index')
// const { getsFirstLinkText } = require('../../actions/uploadExamplePage/index.js')

const UploadExamplePage = require('../../pageComponents/examplePages/uploadExample.js')

describe('Upload Example Page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/',
      {
        headers: {
          'accept': 'application/json, text/plain, */*',
          'user-agent': 'axios/0.27.2'
        }
      })
  })

  it('uploads a file to the page using the upload button', () => {
    const uploadExamplePage = new UploadExamplePage(cy);
    const testFileName = 'file.txt';
    selectsUploadExample();


    uploadExamplePage.uploadFileButton.selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: testFileName,
      lastModified: Date.now(),
    })
    uploadExamplePage.fileSubmitButton.click();
    uploadExamplePage.uploadedFileDiv.should('be.exist');
  })


  it('uploads a file through drags and drop', () => {
    const uploadExamplePage = new UploadExamplePage(cy);
    const testFileName = 'file.txt';
    selectsUploadExample();

    uploadExamplePage.dragAndDropDiv.selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: testFileName,
      lastModified: Date.now(),
    }, {
      action: 'drag-drop'
    });

    uploadExamplePage.dragAndDropDiv.should('contain', testFileName);
  })



});

