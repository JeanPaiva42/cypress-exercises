const BaseComponent = require('../baseComponent')

class DynamicContentExamplePage extends BaseComponent {

    constructor(driver) {
        super(driver)
    }

    /**
     * define selectors using getter methods
     */
    get contentTable() { return this.driver.get('#content') }
    get tableItem() { return this.driver.get('div.row').get('img') }
}

module.exports = DynamicContentExamplePage;