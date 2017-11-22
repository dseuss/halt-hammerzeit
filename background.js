"use strict";

browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.sendMessage(tab.id, {}
    ).then(response => {
        console.log('Stop was succesful.');
    }).catch(error => {
        console.error(error)
    });
});
