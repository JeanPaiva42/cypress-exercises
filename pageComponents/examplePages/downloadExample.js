const BaseComponent = require('../baseComponent')

class DownloadExamplePage extends BaseComponent {

    constructor(driver) {
        super(driver)
    }

    /**
     * define selectors using getter methods
     */
    get filesHeader() { return this.driver.get('.example h3').contains('File Downloader') }

    // This is not pretty but we are just interested on the first one for our tests
    get firstDowloadableLink() { return this.driver.get('.example a').first() }

}

module.exports = DownloadExamplePage;