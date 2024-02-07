document.addEventListener('DOMContentLoaded', function() {
  var rewriteTextBtn = document.getElementById('rewriteTextBtn');
  var promptSelector = document.getElementById('promptSelector');

  rewriteTextBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var selectedPrompt = promptSelector.value;
      chrome.tabs.sendMessage(tabs[0].id, {prompt: selectedPrompt});
    });
  });
});
