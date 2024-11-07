const DynamicControlsExamplePage = require('../../pageComponents/examplePages/dynamicControlsExample.js');


const dynamicControlsExamplePage = new DynamicControlsExamplePage(cy);

module.exports.clicksOnRemoveCheckboxButton = () => {
    return dynamicControlsExamplePage.removeCheckboxButton.click();

}