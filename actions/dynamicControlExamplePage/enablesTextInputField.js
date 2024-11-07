const DynamicControlsExamplePage = require('../../pageComponents/examplePages/dynamicControlsExample.js');

const dynamicControlsExamplePage = new DynamicControlsExamplePage(cy);

module.exports.enablesTextInputField = () => {
    return dynamicControlsExamplePage.enableTextInputFieldButton.click();
}