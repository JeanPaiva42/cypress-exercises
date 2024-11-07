const DynamicControlsExamplePage = require('../../pageComponents/examplePages/dynamicControlsExample.js');

const dynamicControlsExamplePage = new DynamicControlsExamplePage(cy);

module.exports.disablesTextInputField = () => {
    return dynamicControlsExamplePage.disableTextInputFieldButton.click();
}