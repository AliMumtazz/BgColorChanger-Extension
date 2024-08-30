chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received:', request);
    if (request.action === 'changeBg') {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
      sendResponse({ message: 'Background color changed' });
    } else {
      sendResponse({ message: 'Unknown action' });
    }
  });
  