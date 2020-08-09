chrome.contextMenus.create(
	{
		title: "Search on web", 
		contexts:["selection"], 
		id: "parent",
	}
);
chrome.contextMenus.create(
	{
		title: "google", 
		contexts:["selection"], 
		onclick: searchSelection1,
		parentId: "parent",
	}
);
chrome.contextMenus.create(
	{
		title: "yahoo", 
		contexts:["selection"], 
		onclick: searchSelection2,
		parentId: "parent",
	}
);
chrome.contextMenus.create(
	{
		title: "bing", 
		contexts:["selection"], 
		onclick: searchSelection3,
		parentId: "parent",
	}
);
chrome.contextMenus.create(
	{
		title: "wiki", 
		contexts:["selection"], 
		onclick: searchSelection4,
		parentId: "parent",
	}
);
chrome.contextMenus.create(
	{
		title: "Amazon", 
		contexts:["selection"], 
		onclick: searchSelection5,
		parentId: "parent",
	}
);

function searchSelection1(info) {
	var searchString = info.selectionText
	chrome.tabs.create({url: "https://www.google.com/search?q=" + searchString})
}
function searchSelection2(info) {
	var searchString = info.selectionText
	chrome.tabs.create({url: "https://www.bing.com/search?q=" + searchString})
}
function searchSelection3(info) {
	var searchString = info.selectionText
	chrome.tabs.create({url: "https://search.yahoo.com/search?vc=&p=" + searchString})
}
function searchSelection4(info) {
	var searchString = info.selectionText
	chrome.tabs.create({url: "http://en.wikipedia.org/wiki/Special:Search?search=" + searchString+ "&go=Go"})
}
function searchSelection5(info) {
	var searchString = info.selectionText
	chrome.tabs.create({url: "https://www.amazon.in/s?k=" + searchString})
}