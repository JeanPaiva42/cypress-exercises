const BaseComponent = require('../baseComponent')

class ShadowDOMExamplePage extends BaseComponent {

    constructor(driver) {
        super(driver)
    }

    /**
     * define selectors using getter methods
     */
    get shadowDOMFirstTemplate() { return this.driver.get('my-paragraph') }
    get shadowDOMSecondTemplate() { return this.driver.get('#my-paragraph') }


}

module.exports = ShadowDOMExamplePage;