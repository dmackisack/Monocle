console.log("start");

chrome.runtime.onMessage.addListener((request) => {
      console.log("message");
    if (request.prompt) {
      const paragraphs = document.querySelectorAll('p');
      const max = 10;
      let counter = 0;
      paragraphs.forEach(function(paragraph) {
          if(counter >= max) {
              return;
          }
          counter++;
          //console.log(paragraph);
        paragraph.innerText = getRewrittenText(paragraph.innerText, request.prompt);
      });
        console.log("done");
    }
  }
);

function getRewrittenText(originalText, prompt) {
  return originalText.replaceAll("a", "🔥");
}

