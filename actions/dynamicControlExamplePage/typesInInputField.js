const DynamicControlsExamplePage = require('../../pageComponents/examplePages/dynamicControlsExample.js');

const dynamicControlsExamplePage = new DynamicControlsExamplePage(cy);

module.exports.typesInInputField = (testingString) => {
    return dynamicControlsExamplePage.textInputField.type(testingString);
}