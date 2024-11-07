const DownloadExamplePage = require('../../pageComponents/examplePages/downloadExample.js')


const downloadExamplePage = new DownloadExamplePage(cy);

module.exports.clicksInFirstLink = () => {
    return downloadExamplePage.firstDowloadableLink.click();
};