const ExampleList = require('../../pageComponents/mainPage/exampleList.js');


const exampleList = new ExampleList(cy);

module.exports.selectsUploadExample = () => {

    return exampleList.upload.click();
}