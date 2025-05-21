chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed successfully!');
  
  
  chrome.storage.local.set({ 
    isFirstRun: true,
    installDate: new Date().toISOString()
  });
});