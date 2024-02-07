chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.prompt) {
      var paragraphs = document.querySelectorAll('p, span, div');
      paragraphs.forEach(function(paragraph) {
        paragraph.innerText = getRewrittenText(paragraph.innerText, request.prompt);
      });
    }
  }
);

function getRewrittenText(originalText, prompt) {
  return originalText;
}
