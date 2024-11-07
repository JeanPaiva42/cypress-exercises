const DownloadExamplePage = require('../../pageComponents/examplePages/downloadExample.js')


const downloadExamplePage = new DownloadExamplePage(cy);

module.exports.getsFirstLinkText = () => {
    downloadExamplePage.firstDowloadableLink.invoke('text').then((text) => {
        return text;
    });
}