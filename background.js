function reddenPage() {
    const lastLine = document.getElementsByTagName("table")[0].rows.length;
    for (let i = 1; i <= lastLine; i++) {
        const row = document.querySelector("#LC" + i);
        const rowNumber = document.querySelector("#L" + i);
        row.style.fontFamily = "JetBrains Mono";
        row.style.fontSize = "14px";
        rowNumber.style.fontFamily = "JetBrains Mono";
        rowNumber.style.fontSize = "14px";
    }
}

chrome.action.onClicked.addListener((tab) => {
    if(!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: reddenPage
        });
    }
});
