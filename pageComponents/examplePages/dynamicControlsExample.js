const BaseComponent = require('../baseComponent')

class DynamicControlsExamplePage extends BaseComponent {

    constructor(driver) {
        super(driver)
    }

    /**
     * define selectors using getter methods
     */
    get addCheckboxButton() { return this.driver.get('Button').contains('Add') }
    get removeCheckboxButton() { return this.driver.get('Button').contains('Remove') }
    get checkbox() { return this.driver.get('#checkbox') }
    get checkboxInput() { return this.driver.get('#checkbox input') }
    get enableTextInputFieldButton() { return this.driver.get('Button').contains('Enable') }
    get disableTextInputFieldButton() { return this.driver.get('Button').contains('Disable') }
    get textInputField() { return this.driver.get('#input-example input') }
    get progressBar() { return this.driver.get('#loading') }

}

module.exports = DynamicControlsExamplePage;