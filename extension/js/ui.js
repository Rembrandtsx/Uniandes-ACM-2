$("head").append('<link href="' + chrome.extension.getURL('./ui/css/main.css') + '" rel="stylesheet">');


// Append timeline
$.get(chrome.extension.getURL('./ui/index.html'), function (data) {
    $("body").append(data);
});