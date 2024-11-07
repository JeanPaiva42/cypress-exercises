class BaseComponent {
    constructor(driver) {

        this._driver = driver;
    }

    get driver() {
        return this._driver;
    }
}
module.exports = BaseComponent;
