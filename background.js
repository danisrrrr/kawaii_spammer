chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("https://vote.breaktudoawards.com/") && !tab.url.includes("edit")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});
