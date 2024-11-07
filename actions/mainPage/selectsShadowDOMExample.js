const ExampleList = require('../../pageComponents/mainPage/exampleList.js');


const exampleList = new ExampleList(cy);

module.exports.selectsShadowDOMExample = () => {

    return exampleList.shadowDOM.click();
}