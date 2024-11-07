const DynamicControlsExamplePage = require('../../pageComponents/examplePages/dynamicControlsExample.js');


const dynamicControlsExamplePage = new DynamicControlsExamplePage(cy);

module.exports.clicksOnAddCheckboxButton = () => {
    return dynamicControlsExamplePage.addCheckboxButton.click();

}