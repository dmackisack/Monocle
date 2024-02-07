const rewriteButton = document.getElementById('rewriteTextBtn');
const selector = document.getElementById('promptSelector');
const bkg = chrome.extension.getBackgroundPage();

document.addEventListener('DOMContentLoaded', function() {
  rewriteButton.addEventListener('click', replaceText)
})

function replaceText(event) {
  bkg.console.log('click');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var selectedPrompt = selector.value;
    chrome.tabs.sendMessage(tabs[0].id, {prompt: selectedPrompt});
  });
}