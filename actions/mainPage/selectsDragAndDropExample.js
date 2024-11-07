const ExampleList = require('../../pageComponents/mainPage/exampleList.js');


const exampleList = new ExampleList(cy);

module.exports.selectsDragAndDropExample = () => {

    return exampleList.dragAndDrop.click();
}