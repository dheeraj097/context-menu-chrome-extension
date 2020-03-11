chrome.contextMenus.create(
	{
		title: "Search on web", 
		contexts:["selection"], 
		id: "parent",
	}
);
chrome.contextMenus.create(
	{
		title: "OpenCorporates-Officer", 
		contexts:["selection"], 
		onclick: searchSelection,
		parentId: "parent",
	}
);
chrome.contextMenus.create(
	{
		title: "google", 
		contexts:["selection"], 
		onclick: searchSelection,
		parentId: "parent",
	}
);
chrome.contextMenus.create(
	{
		title: "yahoo", 
		contexts:["selection"], 
		onclick: searchSelection,
		parentId: "parent",
	}
);
chrome.contextMenus.create(
	{
		title: "bing", 
		contexts:["selection"], 
		onclick: searchSelection,
		parentId: "parent",
	}
);
chrome.contextMenus.create(
	{
		title: "wiki", 
		contexts:["selection"], 
		onclick: searchSelection,
		parentId: "parent",
	}
);

function searchSelection(info) {
	var searchString = info.selectionText
	chrome.tabs.create({url: "https://opencorporates.com/officers?&q=" + searchString})
	chrome.tabs.create({url: "https://www.google.com/search?q=" + searchString})
	chrome.tabs.create({url: "https://www.bing.com/search?q=" + searchString})
	chrome.tabs.create({url: "https://search.yahoo.com/search?vc=&p=" + searchString})
	chrome.tabs.create({url: "http://en.wikipedia.org/wiki/Special:Search?search=" + searchString+ "&go=Go"})
}