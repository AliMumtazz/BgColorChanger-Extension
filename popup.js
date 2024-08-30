document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeBgButton');
  
    button.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'changeBg' }, (response) => {
            if (chrome.runtime.lastError) {
              console.error('Error sending message:', chrome.runtime.lastError.message);
            } else {
              console.log('Message sent:', response);
            }
          });
        } else {
          console.error('No active tab found');
        }
      });
    });
  });
  