const DynamicControlsExamplePage = require('../../pageComponents/examplePages/dynamicControlsExample.js');

const dynamicControlsExamplePage = new DynamicControlsExamplePage(cy);

module.exports.clicksOnCheckboxInput = () => {
    return dynamicControlsExamplePage.checkboxInput.check();
}