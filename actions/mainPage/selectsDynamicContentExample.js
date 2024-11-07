const ExampleList = require('../../pageComponents/mainPage/exampleList.js');


const exampleList = new ExampleList(cy);

module.exports.selectsDynamicContentExample = () => {

    return exampleList.dynamicContent.click();
}