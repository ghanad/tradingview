# TradingView AdBlock Defender

A Tampermonkey userscript that removes the TradingView anti-adblock popup and restores full functionality to the platform while using an adblocker.

## Description

This script automatically removes the "Ad blocker detected" popup that appears on TradingView when using an adblocker. It maintains full chart functionality and prevents any interference with the trading interface.

### Features

- Removes the anti-adblock popup completely
- Prevents screen blur effects
- Restores chart interaction functionality
- Works with all major adblockers
- Auto-updates to catch dynamically loaded popups
- No impact on TradingView's core functionality

## Installation

1. Install the Tampermonkey browser extension:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. Click on the Tampermonkey icon and select "Create a new script"

3. Copy the entire content of `tradingview-adblock.js` into the editor

4. Press Ctrl+S or Command+S to save the script

5. Refresh any open TradingView tabs

## How It Works

The script uses multiple methods to ensure the popup is removed and functionality is restored:

1. Removes popup-related DOM elements
2. Prevents body scroll locking
3. Removes blur effects from the interface
4. Re-enables pointer events on the main chart
5. Uses a MutationObserver to catch dynamically added elements
6. Runs periodic checks to ensure the popup stays removed

## Compatibility

- Works with Chrome, Firefox, Edge, and other Chromium-based browsers
- Compatible with major adblockers (uBlock Origin, AdBlock Plus, etc.)
- Tested with TradingView's latest version

## Notes

- This script is for educational purposes only
- May need updates if TradingView changes their popup implementation
- Does not interfere with TradingView's core functionality or data delivery
- Respects TradingView's terms of service while maintaining user choice for ad blocking

## Contributing

Feel free to submit issues and enhancement requests through GitHub Issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
