const BaseComponent = require('../baseComponent')

class UploadExamplePage extends BaseComponent {

    constructor(driver) {
        super(driver)
    }

    /**
     * define selectors using getter methods
     */
    get uploadFileButton() { return this.driver.get('#file-upload') }
    get fileSubmitButton() { return this.driver.get('#file-submit') }
    get uploadedFileDiv() { return this.driver.get('#uploaded-files') }
    get dragAndDropDiv() { return this.driver.get('#drag-drop-upload') }
}

module.exports = UploadExamplePage;