// ==UserScript==
// @name         TradingView Advanced AdBlock Popup Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes TradingView adblock popup and restores functionality
// @author       You
// @match        https://*.tradingview.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove elements and their related structures
    function removeElements() {
        // Remove backdrop and overlay elements
        const elementsToRemove = [
            '.backdrop-VeoIyDt4',
            '.dialog-VeoIyDt4',
            '.dialog-wH0t6WRN',
            '.modal-VeoIyDt4',
            '.container-VeoIyDt4',
            '.wrap-VeoIyDt4'
        ];

        elementsToRemove.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => el.remove());
        });

        // Remove fixed positioning and overlay effects
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.overflow = '';

        // Remove any blur effects
        document.querySelectorAll('.blur').forEach(el => {
            el.classList.remove('blur');
            el.style.filter = 'none';
        });

        // Remove overlay effects
        const overlayStyle = document.createElement('style');
        overlayStyle.textContent = `
            .screen-otjoFNF2 {
                display: none !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }
            body {
                overflow: auto !important;
                position: static !important;
            }
            .backdrop-VeoIyDt4,
            .dialog-VeoIyDt4,
            .dialog-wH0t6WRN,
            .modal-VeoIyDt4,
            .container-VeoIyDt4,
            .wrap-VeoIyDt4 {
                display: none !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }
            [class*="dialog-"][class*="gopro-"] {
                display: none !important;
            }
        `;
        document.head.appendChild(overlayStyle);

        // Re-enable pointer events on main content
        document.querySelectorAll('.chart-container, .chart-markup-table').forEach(el => {
            el.style.pointerEvents = 'auto';
        });
    }

    // Run on page load
    removeElements();

    // Create an observer instance to watch for dynamically added elements
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length) {
                removeElements();
            }
        }
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Also handle on document ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", removeElements);
    }

    // Run periodically to catch any missed elements
    setInterval(removeElements, 1000);
})();
