// ==UserScript==
// @name         Komga rotate
// @namespace    https://github.com/LuTang-Terrence/komga-rotate
// @version      1.0
// @description  Add image rotate support for Komga reader, inspired by https://linux.do/t/topic/529278
// @author       lt
// @match        https://YOUR_KOMGA_DOMAIN/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/LuTang-Terrence/komga-rotate/main/komga-rotate.user.js
// @updateURL    https://raw.githubusercontent.com/LuTang-Terrence/komga-rotate/main/komga-rotate.user.js
// ==/UserScript==

(function() {
    'use strict';

    const toolbarSelector = '.v-toolbar__content';
    var rotationDegree = 0;
    var lastPageUrl = window.location.href;

    function createButton(iconClass, action) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'v-btn v-btn--icon v-btn--round theme--light v-size--default';
        button.innerHTML = `<span class="v-btn__content"><i aria-hidden="true" class="${iconClass} v-icon notranslate theme--light"></i></span>`;
        button.onclick = action;
        return button;
    }

    function appendButtons() {
        const url = window.location.href;

        // Reset rotation on page change
        if (url !== lastPageUrl) {
            console.log(`Page changed, resetting rotation.`);
            rotationDegree = 0;
            rotateImageAll();
            lastPageUrl = url;
        }

        // Check if the URL contains "read?"
        if (url.includes("read?")) {
            const toolbar = document.querySelector(toolbarSelector);
            if (!toolbar) return;

            // Add rotate button if not already present
            if (!document.querySelector('.rotate-button')) {
                const rotateButton = createButton('mdi mdi-phone-rotate-landscape rotate-button', () => {
                    rotationDegree = (rotationDegree + 90) % 360;
                    console.log(`Current rotation degree: ${rotationDegree}°`);
                    rotateImageAll();
                });
                toolbar.appendChild(rotateButton);
            }
        } else {
            // Remove the rotate button if it exists
            const rotateButton = document.querySelector('.rotate-button');
            if (rotateButton) rotateButton.remove();
        }
    }

    function rotateImageAll() {
        const images = document.querySelectorAll('img');
        console.log(`Found ${images.length} images to rotate.`);

        images.forEach(image => {
            // Apply the rotation
            const degrees = rotationDegree % 360;
            image.style.transform = `rotate(${degrees}deg)`;
            image.style.transition = 'transform 0.5s';
            image.style.transformOrigin = 'center center';

            console.log(`Rotated image to ${degrees}°`);
        });
    }

    // Observe DOM changes to dynamically add buttons and reset rotation
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length || mutation.removedNodes.length) {
                appendButtons();
                rotateImageAll();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    appendButtons(); // Initial append
})();