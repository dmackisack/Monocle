const rewriteButton = document.getElementById('rewriteTextBtn');
const selector = document.getElementById('promptSelector');
const apiKeyInput = document.getElementById('apiKeyInput');
const bkg = chrome.extension.getBackgroundPage();

prompts = [
    "none",
    "reword the text {0} paragraph by paragraph, as though written by someone with a third grade writing ability",
    "reword the text {0} paragraph by paragraph, as though written by someone with a third grade writing ability",
    "reword the text {0} paragraph by paragraph, as though written by someone with a third grade writing ability",
    "reword the text {0} paragraph by paragraph, as though written by someone with a third grade writing ability",
]

document.addEventListener('DOMContentLoaded', function() {
  rewriteButton.addEventListener('click', replaceText)
})

function replaceText(event) {
  bkg.console.log('click');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var selectedPrompt = selector.value;
    bkg.console.log('prompt ', selectedPrompt, prompts[selectedPrompt]);
    if(selectedPrompt != 0) {
      chrome.tabs.sendMessage(tabs[0].id, {prompt: prompts[selectedPrompt], apiKey: apiKeyInput.value});
    }
  });
}

