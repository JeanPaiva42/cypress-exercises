const BaseComponent = require('../baseComponent')

class DragAndDropExamplePage extends BaseComponent {

    constructor(driver) {
        super(driver)
    }

    /**
     * define selectors using getter methods
     */

    get blockA() { return this.driver.get('#column-a') }
    get blockB() { return this.driver.get('#column-b') }


}

module.exports = DragAndDropExamplePage;