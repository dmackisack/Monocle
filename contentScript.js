console.log("start");

chrome.runtime.onMessage.addListener((request) => {
      console.log("message");
    if (request.prompt) {
      const paragraphs = document.querySelectorAll('p');
      const max = 1;
      let counter = 0;
      paragraphs.forEach(function(paragraph) {
          if(counter >= max) {
              return;
          }
          counter++;
          //console.log(paragraph);
        paragraph.innerText = getRewrittenText(paragraph.innerText, request.prompt, request.apiKey);
      });
        console.log("done");
    }
  }
);


function getRewrittenText(originalText, prompt, apiKey) {
    //let actualPrompt = String.format(prompt, originalText);
    let actualPrompt = "Say Hi";
    console.log(actualPrompt);
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ apiKey,
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo-0125",
            "messages": [{"role": "user", "content": actualPrompt}],
            "temperature": 0.5
        }),
    })
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log(response);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    console.log("Success", data);
                    alert("success");
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
  return originalText.replaceAll("a", "🔥");
}

if (!String.format) {
    String.format = function(format) {
        let args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}


