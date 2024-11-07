const AddRemoveExamplePage = require('../../pageComponents/examplePages/addRemoveExample.js');


const addRemoveExample = new AddRemoveExamplePage(cy);

module.exports.addButtonToPage = () => {

    return addRemoveExample.addElementButton.click();
}