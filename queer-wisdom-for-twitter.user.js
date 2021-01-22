// ==UserScript==
// @name            Queer wisdom for Twitter
// @name:de         Queere Weisheiten für Twitter
// @namespace       stephfuchs.queer.wisdowm.for.twitter
// @version         1.0.0-rc.2
// @author          Stephanie Fuchs
// @description     This script adds an extra button to Twitter, to tweet a queer wisdom randomly.
// @description:de  Das Skript fügt einen Button zu Twitter, um eine zufällige queere Weisheit zu posten.
// @homepage        https://github.com/stephfuchs/tampermonkey-queer-wisdom-for-twitter/
// @include         https://twitter.com/*
// @run-at          document-body
// @downloadURL     https://github.com/stephfuchs/tampermonkey-queer-wisdom-for-twitter/raw/master/queer-wisdom-for-twitter.user.js
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
    class ProvideQueerFlag {

        /**
         * Provide some variables for the the extra button.
         */
        constructor() {
            this.debug = '## Queer wisdom for Twitter debugger ##\n';
            this.info = '## Queer wisdom for Twitter information ##\n';
        }

        /**
         * Initialization of the script.
         */
        init() {
            console.debug(this.debug + 'Initialization of the script starts.');
            let twitterElement = document.querySelector('.css-1dbjc4n.r-1awozwy.r-18u37iz.r-156q2ks');
            twitterElement.append(this._getTwitterButtonHtml());
            console.debug(this.debug + 'Added lgbtqia+ flag.');

            document.getElementById('queer_wisdom').addEventListener('click', this._onclick);
            console.debug(this.debug + 'Added onclick binding.');
            console.debug(this.debug + 'Initialization of the script ended. Have fun.');
        }

        /**
         * Creates a new div container with the queer flag.
         *
         * @returns {HTMLDivElement}
         * @private
         */
        _getTwitterButtonHtml() {
            let queerElement = document.createElement('div');
            queerElement.id = 'queer_wisdom';
            queerElement.style.paddingLeft = '10px';
            queerElement.style.cursor = 'pointer';
            queerElement.title = 'add a random queer wisdom';
            queerElement.innerHTML = this._getFlagSVG();
            return queerElement;
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
     * Run the stuff when document body is loaded
     */
    var twitterIsReady = setInterval(function () {

        let version = '1.0.0-rc.2';
        let name = 'Queer wisdom for Twitter';
        let copyright = '(c) 2021 • Stephanie Fuchs • https://github.com/stephfuchs';
        let classes = '.css-1dbjc4n.r-1awozwy.r-18u37iz.r-156q2ks';

        if (document.querySelector(classes) !== null || document.querySelector(classes) !== undefined) {
            clearInterval(twitterIsReady);
            console.info('loaded script: "' + name + '" with version: ' + version + '\n' + copyright);
            const provideQueerFlag = new ProvideQueerFlag();
            console.debug(provideQueerFlag.debug + 'removed interval');
            console.debug(provideQueerFlag.debug + 'created new wisdom object');

            provideQueerFlag.init();
        }
    }, 3000); // check every 3sec
})();
