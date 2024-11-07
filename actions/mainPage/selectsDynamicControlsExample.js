const ExampleList = require('../../pageComponents/mainPage/exampleList.js');


const exampleList = new ExampleList(cy);

module.exports.selectsDynamicControlsExample = () => {

    return exampleList.dynamicControls.click();
}