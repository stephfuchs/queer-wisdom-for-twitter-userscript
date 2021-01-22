// ==UserScript==
// @name            queer wisdom for Twitter
// @namespace       stephfuchs.queer.wisdowm.for.twitter
// @version         1.0.0-rc.3
// @author          Stephanie Fuchs
// @description     The "Queer wisdom for Twitter" script adds a button with a queer flag for the LGBTQIA+ community. By clicking the flag the script will add a random wisdom. There is a list of quotes provided by a JSON file. So the script automatically gets quote-updates. Updates concerning the script are just as features or bugfixing.
// @homepage        https://github.com/stephfuchs/tampermonkey-queer-wisdom-for-twitter/
// @include         https://twitter.com/*
// @run-at          document-body
// @downloadURL       https://github.com/stephfuchs/tampermonkey-queer-wisdom-for-twitter/raw/master/queer-wisdom-for-twitter.user.js
// @updateURL       https://github.com/stephfuchs/tampermonkey-queer-wisdom-for-twitter/raw/master/queer-wisdom-for-twitter.user.js
// @supportURL      https://github.com/stephfuchs/tampermonkey-queer-wisdom-for-twitter/issues
// @license	        MIT
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Script to provide the queer wisdom and add it to the tweet-field.
     */
    class QueerWisdomForTwitterUser {

        /**
         * Provide some variables for the the queer wisdom.
         */
        constructor() {
            this.debug = '## Queer wisdom for Twitter debugger ##\n';
            this.info = '## Queer wisdom for Twitter information ##\n';
            this.jsonWisdoms = 'https://gist.githubusercontent.com/stephfuchs/4d2c3b88407c29b0672623b8fc519d4c/raw/567a7595c7442294de9a851d70e4d0f71ebc5a6c/tampermonkey-queer-wisdom-for-twitter.json';
        }

        /**
         * WORK IN PROGRESS / TO DO
         */
        init() {
            console.info(this.info + 'Let\'s spread a queer wisdom!');
            console.info(this.info + 'WORK IN PROGESS. Stay tuned.');
            // todo: auslesen aus JSON vom server, dann kann das im hintergrund immer geupdatet werden, ohne den Code anzupassen.
        }
    }

    /**
     * Script to add an extra button to Twitter with a click event.
     */
    class ProvideQueerFlagButton {

        /**
         * Provide some variables for the the extra button.
         */
        constructor() {
            this.debug = '## Queer wisdom for Twitter debugger ##\n';
            this.info = '## Queer wisdom for Twitter information ##\n';
            this.queerElement = null;
            this.queerElementId = 'queer_wisdom';
        }

        /**
         * Initialization of the script.
         */
        init() {
            console.debug(this.debug + 'Initialization of the script starts.');
            let twitterElement = this._getTwitterElement();
            this._createQueerElement();
            twitterElement.append(this._getQueerElement());
            console.debug(this.debug + 'Added lgbtqia+ flag.');

            document.getElementById('queer_wisdom').addEventListener('click', this._onclick);
            console.debug(this.debug + 'Added onclick binding.');
            console.debug(this.debug + 'Initialization of the script ended. Have fun.');
        }

        /**
         * Get the Twitter element
         * @returns {Element}
         * @private
         */
        _getTwitterElement() {
            return document.querySelector('.css-1dbjc4n.r-1awozwy.r-18u37iz.r-156q2ks');
        }

        /**
         * Getter for class queer element
         * @returns {null}
         * @private
         */
        _getQueerElement() {
            return this.queerElement;
        }

        /**
         * Creates a new div container with the queer flag.
         *
         * @returns {HTMLDivElement}
         * @private
         */
        _createQueerElement() {
            this.queerElement = document.createElement('div');
            this.queerElement.id = this.queerElementId;
            this.queerElement.style.paddingLeft = '10px';
            this.queerElement.style.cursor = 'pointer';
            this.queerElement.title = 'add a random queer wisdom';
            this.queerElement.innerHTML = this._getFlagSVG();
        }

        /**
         * Get the LGBTQIA+ flag.
         * Credits for the svg: https://commons.wikimedia.org/wiki/File:LGBTQ%2B_rainbow_flag_Quasar_%22Progress%22_variant.svg
         *
         * @returns {string}
         * @private
         */
        _getFlagSVG() {
            return '<svg style="width: 27px; height: auto;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 3810">\n' +
                '\t<rect fill="#750787" width="6000" height="3810"/>\n' +
                '\t<rect fill="#004dff" width="6000" height="3175"/>\n' +
                '\t<rect fill="#008026" width="6000" height="2540"/>\n' +
                '\t<rect fill="#ffed00" width="6000" height="1905"/>\n' +
                '\t<rect fill="#ff8c00" width="6000" height="1270"/>\n' +
                '\t<rect fill="#e40303" width="6000" height="635"/>\n' +
                '\n' +
                '    <polygon points="-1,960 950,1905 -1,2850" fill="#ffffff"/>\n' +
                '    <polygon points="-1,960 -1,480 1420,1905 -1,3330 -1,2850 950,1905" fill="#ffafc8"/>\n' +
                '    <polygon points="-1,480 -1,0 1912,1905 -1,3810 -1,3330 1420,1905 -1,480" fill="#74d7ee"/>\n' +
                '    <polygon points="-1,0 1912,1905 -1,3810 480,3810 2384,1905 480,0" fill="#613915"/>\n' +
                '    <polygon points="480,0 960,0 2864,1905 960,3810 480,3810 2384 1905 480,0" fill="#000000"/>\n' +
                '</svg>';
        }

        /**
         * If the flag was clicked get the queer wisdom.
         * @private
         */
        _onclick() {
            let wisdom = new QueerWisdomForTwitterUser();
            wisdom.init();
        }
    }

    /**
     * Create the Queer button and add it to Twitter.
     */
    function create() {
        const provideQueerFlagButton = new ProvideQueerFlagButton();
        console.debug(provideQueerFlagButton.debug + 'removed interval');
        console.debug(provideQueerFlagButton.debug + 'created new wisdom object');

        provideQueerFlagButton.init();
    }

    /**
     * Run the stuff when document body is loaded
     */
    var twitterIsReady = setInterval(function () {
        let version = '1.0.0-rc.3';
        let name = 'Queer wisdom for Twitter';
        let copyright = '(c) 2021 • Stephanie Fuchs • https://github.com/stephfuchs';
        let classes = '.css-1dbjc4n.r-1awozwy.r-18u37iz.r-156q2ks';

        if (document.querySelector(classes) !== null || document.querySelector(classes) !== undefined) {
            clearInterval(twitterIsReady);
            console.info('loaded script: "' + name + '" with version: ' + version + '\n' + copyright);
            create();
        }
    }, 3000); // check every 3sec


    /**
     * Check the system every 5 min whether the button is been missing.
     */
    setInterval(function () {
        if (document.getElementById('queer_wisdom') === null) {
            console.debug('Button was deleted. Readd starts.');
            create();
            console.info('reloaded the queer button');
            console.debug('Readd ended.');
        }
    }, 300000); // check every 5 min
})();
