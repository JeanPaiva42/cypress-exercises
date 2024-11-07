const AddRemoveExamplePage = require('../../pageComponents/examplePages/dynamicContentExample.js');


const dynamicContentExamplePage = new DynamicContentExamplePage(cy);

module.exports.accessDynamicContent = () => {
    dynamicContentExamplePage
}