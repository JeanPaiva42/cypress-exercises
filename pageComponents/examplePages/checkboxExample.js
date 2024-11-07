const BaseComponent = require('../baseComponent')

class AddRemoveExamplePage extends BaseComponent {

    constructor(driver) {
        super(driver)
    }

    /**
     * define selectors using getter methods
     */
    get addElementButton() { return this.driver.get('Button').contains('Add Element') }
    get removeElementButton() { return this.driver.get('Button').contains('Delete') }
}

module.exports = AddRemoveExamplePage;