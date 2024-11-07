const DynamicControlsExamplePage = require('../../pageComponents/examplePages/dynamicControlsExample.js');

const dynamicControlsExamplePage = new DynamicControlsExamplePage(cy);

module.exports.waitsForAction = () => {
    dynamicControlsExamplePage.progressBar.should('not.be.visible');
}