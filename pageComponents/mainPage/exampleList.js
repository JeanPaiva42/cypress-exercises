const BaseComponent = require('../baseComponent')

class ExampleList extends BaseComponent {

    constructor(driver) {
        super(driver)
    }

    /**
     * define selectors using getter methods
     */
    get abtest() { return this.driver.get('[href="/abtest"]') }
    get addRemoveElement() { return this.driver.get('[href="/add_remove_elements/"]') }
    get checkboxes() { return this.driver.get('[href="/checkboxes"]') }
    get basicAuth() { return this.driver.get('[href="/basic_auth"]') }
    get brokenImages() { return this.driver.get('[href="/broken_images"]') }
    get challengingDOM() { return this.driver.get('[href="/challenging_dom"]') }
    get contextMenu() { return this.driver.get('[href="/context_menu"]') }
    get digestAuth() { return this.driver.get('[href="/digest_auth"]') }
    get disapperingElements() { return this.driver.get('[href="/disappearing_elements"]') }
    get dragAndDrop() { return this.driver.get('[href="/drag_and_drop"]') }
    get dropdown() { return this.driver.get('[href="/dropdown"]') }
    get dynamicContent() { return this.driver.get('[href="/dynamic_content"]') }
    get dynamicControls() { return this.driver.get('[href="/dynamic_controls"]') }
    get dynamicLoading() { return this.driver.get('[href="/dynamic_loading"]') }
    get entryAd() { return this.driver.get('[href="/entry_ad"]') }
    get exitIntent() { return this.driver.get('[href="/exit_intent"]') }
    get download() { return this.driver.get('[href="/download"]') }
    get upload() { return this.driver.get('[href="/upload"]') }
    get floatingMenu() { return this.driver.get('[href="/floating_menu"]') }
    get forgotPassword() { return this.driver.get('[href="/forgot_password"]') }
    get login() { return this.driver.get('[href="/login"]') }
    get frames() { return this.driver.get('[href="/frames"]') }
    get geolocation() { return this.driver.get('[href="/geolocation"]') }
    get horizontalSlider() { return this.driver.get('[href="/horizontal_slider"]') }
    get hovers() { return this.driver.get('[href="/hovers"]') }
    get infiniteScroll() { return this.driver.get('[href="/infinite_scroll"]') }
    get inputs() { return this.driver.get('[href="/inputs"]') }
    get jqueryMenu() { return this.driver.get('[href="/jqueryui/menu"]') }
    get javascriptAlerts() { return this.driver.get('[href="/javascript_alerts"]') }
    get javascriptError() { return this.driver.get('[href="/javascript_error"]') }
    get keyPresses() { return this.driver.get('[href="/key_presses"]') }
    get largeDOM() { return this.driver.get('[href="/large"]') }
    get multipleWindows() { return this.driver.get('[href="/windows"]') }
    get nestedFrames() { return this.driver.get('[href="/nested_frames"]') }
    get notificationMessage() { return this.driver.get('[href="/notification_message"]') }
    get redirector() { return this.driver.get('[href="/redirector"]') }
    get downloadSecure() { return this.driver.get('[href="/download_secure"]') }
    get shadowDOM() { return this.driver.get('[href="/shadowdom"]') }
    get shiftingContent() { return this.driver.get('[href="/shifting_content"]') }
    get slowResources() { return this.driver.get('[href="/slow"]') }
    get tables() { return this.driver.get('[href="/tables"]') }
    get statusCodes() { return this.driver.get('[href="/status_codes"]') }
    get typos() { return this.driver.get('[href="/typos"]') }
    get editor() { return this.driver.get('[href="/tinymce"]') }

}

module.exports = ExampleList;