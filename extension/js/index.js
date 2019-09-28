chrome.browserAction.onClicked.addListener(function (tab) {


	chrome.tabs.executeScript(tab.ib, {
		file:"https://code.jquery.com/jquery-3.4.1.min.js"
	});
});
