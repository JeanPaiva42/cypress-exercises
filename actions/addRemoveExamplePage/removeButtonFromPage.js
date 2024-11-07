const AddRemoveExamplePage = require('../../pageComponents/examplePages/addRemoveExample.js');


const addRemoveExample = new AddRemoveExamplePage(cy);

module.exports.removeButtonFromPage = () => {

    return addRemoveExample.removeElementButton.click();
}