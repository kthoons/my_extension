document.getElementById('insert').addEventListener('click', () => {
    let template = document.getElementById('template').value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {action: "insertTemplate", template: template}, (response) => {
        console.log(response.status);
      });
    });
  });
  