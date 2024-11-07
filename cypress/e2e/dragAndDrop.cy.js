const { selectsDragAndDropExample } = require('../../actions/mainPage/index')
const { dragBoxA, dragBoxB } = require('../../actions/dragAndDropExamplePage/index.js')

const DragAndDropExamplePage = require('../../pageComponents/examplePages/dragAndDropExample.js')

describe('Drag And Drop Example Page', () => {

  it('verifies that we have two draggable boxes in the page', () => {

    cy.visit('https://the-internet.herokuapp.com/',
      {
        headers: {
          'accept': 'application/json, text/plain, */*',
          'user-agent': 'axios/0.27.2'
        }
      })


    const dragAndDropExamplePage = new DragAndDropExamplePage(cy);

    selectsDragAndDropExample(cy);

    dragAndDropExamplePage.blockA.should('be.exist');
    dragAndDropExamplePage.blockB.should('be.exist');
  })

  it('verifies that we have two draggable boxes in the page', () => {

    cy.visit('https://the-internet.herokuapp.com/',
      {
        headers: {
          'accept': 'application/json, text/plain, */*',
          'user-agent': 'axios/0.27.2'
        }
      })


    const dragAndDropExamplePage = new DragAndDropExamplePage(cy);

    selectsDragAndDropExample(cy);

    cy.dragAndDrop(dragAndDropExamplePage.blockA, dragAndDropExamplePage.blockB);

    dragAndDropExamplePage.blockA.should('contain.text', 'B');
    dragAndDropExamplePage.blockB.should('contain.text', 'A');
  })


})
