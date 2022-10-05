function changeFont() {
    document.querySelectorAll(".blob-code-inner").forEach(function(element) {
        element.style.fontFamily = "JetBrains Mono";
        element.style.fontSize = "14px";
    });
    document.querySelectorAll(".blob-num").forEach(function(element) {
        element.style.fontFamily = "JetBrains Mono";
        element.style.fontSize = "14px";
    });
}

chrome.action.onClicked.addListener((tab) => {
    if(!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: changeFont
        });
    }
});
