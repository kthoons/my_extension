function insertTemplate(template) {
    let emailBody = document.querySelector('div[aria-label="Message Body"]');
    if (emailBody) {
      emailBody.innerHTML = template;
    }
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "insertTemplate") {
      insertTemplate(request.template);
      sendResponse({status: "Template inserted"});
    }
  });
  