// ==UserScript==
// @name            Queer wisdom for Twitter
// @name:de         Queere Weisheiten für Twitter
// @namespace       stephfuchs.queer.wisdowm.for.twitter
// @version         0.1.1
// @author          Stephanie Fuchs
// @description     This script adds an extra button to Twitter, to tweet a queer wisdom randomly.
// @description:de  Das Skript fügt einen Button zu Twitter, um eine zufällige queere Weisheit zu posten.
// @homepage        https://github.com/stephfuchs/tampermonkey-queer-wisdom-for-twitter/
// @include         https://twitter.com/home
// @run-at          document-body
// @downloadURL     https://github.com/stephfuchs/tampermonkey-queer-wisdom-for-twitter/raw/master/queer-wisdom-for-twitter.user.js
// @updateURL       https://github.com/stephfuchs/tampermonkey-queer-wisdom-for-twitter/raw/master/queer-wisdom-for-twitter.user.js
// @supportURL      https://github.com/stephfuchs/tampermonkey-queer-wisdom-for-twitter/issues
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Script to add an extra button to Twitter to tweet a queer wisdom randomly
     * @version 1.0.0
     */
    class QueerWisdomForTwitterUser {

        /**
         * constructor for the script
         * @version 1.0.0
         */
        constructor() {
            this.version = '0.1.1';
            this.name = 'Queer wisdom for Twitter';
            this.copyright = '(c) 2021 • Stephanie Fuchs • https://github.com/stephfuchs';
        }

        /**
         * Initialization of the script.
         * @version 1.0.0
         */
        init() {
            console.debug('Initialization of the script starts...');
        }
    }

    // run the stuff when document body is loaded
    const wisdom = new QueerWisdomForTwitterUser();
    console.debug('created new wisdom object')
    console.info('loaded script: "' + wisdom.name + '" with version: ' + wisdom.version + '\n' + wisdom.copyright);
    wisdom.init();
})();
