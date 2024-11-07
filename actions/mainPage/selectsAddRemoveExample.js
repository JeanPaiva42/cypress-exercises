const ExampleList = require('../../pageComponents/mainPage/exampleList.js');


const exampleList = new ExampleList(cy);

module.exports.selectsAddRemoveExample = () => {

    return exampleList.addRemoveElement.click();
}