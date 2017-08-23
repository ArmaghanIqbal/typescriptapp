"use strict";
exports.__esModule = true;
var impoertcalllog = require("./htmlcontrolsclass");
window.onload = function MainPageHTML() {
    var lo = new mainPage();
    lo.mainPageFunction();
};
var mainPage = (function () {
    function mainPage() {
    }
    mainPage.prototype.mainPageFunction = function () {
        document.title = 'Main Page';
        // get the refference of the main Div
        var mainDiv = document.getElementById('MainDiv');
        var element = document.getElementById('ParentDiv');
        if (element != null) {
            element.remove();
        }
        var ParentDiv = document.createElement('div');
        ParentDiv.setAttribute('id', 'ParentDiv');
        ParentDiv.setAttribute('align', 'center');
        var html1 = new impoertcalllog.htmlElementCreation();
        ParentDiv.appendChild(html1.createMenu('divMenu', 'Home,About', 'homefun,aboutfunc'));
        mainDiv.appendChild(ParentDiv);
    };
    return mainPage;
}());
exports.mainPage = mainPage;
