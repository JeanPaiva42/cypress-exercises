const ExampleList = require('../../pageComponents/mainPage/exampleList.js');


const exampleList = new ExampleList(cy);

module.exports.selectsDownloadExample = () => {

    return exampleList.download.click();
}