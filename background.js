"use strict";

// var EXTENSION_ID = "millis2date";

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: "#3aa757" }, function() {
    console.log("The color is green.");
  });
});

var menuItem = {
  id: "millis2date",
  title: "millis2date",
  contexts: ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(data) {
  console.error("HERE!!!!");
  if (data.menuItemId == "millis2date") {
    // var millis = Number(data.selectionText);
    // var date = new Date(millis);

    var options = {
      type: "basic",
      iconUrl: "images/get_started128.png",
      title: "Millis2Date",
      message: "TEST123"
    };

    chrome.notifications.create("limitNotif", options);
  }
});
