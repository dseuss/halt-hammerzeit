"use strict";

browser.runtime.onMessage.addListener(request => {
    window.stop();
    return Promise.resolve({response: "Succesfully stopped."});
});
