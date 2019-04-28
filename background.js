"use strict";

var EXTENSION_ID = "millis2date";
var NOTIFICATION_ID = "result";

chrome.runtime.onInstalled.addListener(afterInstall);

addMenuItem();

var notification = createNotification();

chrome.contextMenus.onClicked.addListener(function(data) {
  if (data.menuItemId == EXTENSION_ID) {
    var millis = Number(data.selectionText);
    var date = new Date(millis);

    chrome.notifications.clear(NOTIFICATION_ID);
    var options = {
      type: "basic",
      iconUrl: "images/get_started128.png",
      title: "Millis2Date",
      message: date.toString()
    };
    chrome.notifications.create(NOTIFICATION_ID, options);
  }
});

function afterInstall() {
  console.log("Installed " + EXTENSION_ID + ".");
}

function addMenuItem() {
  var menuItem = {
    id: EXTENSION_ID,
    title: "millis2date",
    contexts: ["selection"]
  };
  chrome.contextMenus.create(menuItem);
}

function createNotification() {}
