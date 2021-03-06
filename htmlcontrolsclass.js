"use strict";
//  var onlyAlphabets=function (event){
//      var e = event.charCode;
//      if(!(e >= 65 && e <= 120) && (e != 32 && e != 0)) { 
//         event.preventDefault(); 
//      }
//  }
// var onlyAlphabetsAndNumbers=function (event){
//     var e = event.charCode;
//     if(!(e >= 65 && e <= 120) &&  !(e>=48 &&e<=57)) { 
//        event.preventDefault(); 
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var creatediv = (function () {
    function creatediv() {
    }
    creatediv.prototype.divhtml = function (divid) {
        var div = document.createElement('div');
        div.setAttribute('id', divid);
        return div;
    };
    return creatediv;
}());
var htmlElementCreation = (function (_super) {
    __extends(htmlElementCreation, _super);
    function htmlElementCreation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    htmlElementCreation.prototype.createImage = function (divid, imageUrl, imgWidth, imgHeight) {
        var div = this.divhtml(divid);
        var newImage = document.createElement('img');
        newImage.src = imageUrl;
        newImage.width = imgWidth;
        newImage.height = imgHeight;
        div.appendChild(newImage);
        return div;
    };
    htmlElementCreation.prototype.createMenu = function (divid, listText, menuFunctions) {
        var div = this.divhtml(divid);
        var ul = document.createElement('ul');
        var str = listText;
        var str_array = str.split(',');
        var hyperFunction = menuFunctions.split(',');
        for (var i = 0; i < str_array.length; i++) {
            var li = document.createElement('li');
            str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
            hyperFunction[i] = hyperFunction[i].replace(/^\s*/, "").replace(/\s*$/, "");
            var hyperlink = document.createElement('a');
            var linkText = document.createTextNode(str_array[i]);
            hyperlink.appendChild(linkText);
            hyperlink.title = str_array[i];
            hyperlink.href = '#';
            //hyperlink.addEventListener("click",  hyperFunction[i], false);
            li.appendChild(hyperlink);
            ul.appendChild(li);
        }
        div.appendChild(ul);
        return div;
    };
    htmlElementCreation.prototype.createLabels = function (divid, labeltext) {
        var div = this.divhtml(divid);
        var newSpan = document.createElement('span');
        newSpan.innerHTML = labeltext;
        div.appendChild(newSpan);
        return div;
    };
    htmlElementCreation.prototype.createtextboxes = function (divid, textid, typetext, myValidtion, required) {
        var div = this.divhtml(divid);
        var textbox = document.createElement('input');
        textbox.type = 'text';
        textbox.setAttribute('id', textid);
        textbox.setAttribute('type', typetext);
        textbox.required = required;
        textbox.onkeypress = function (event) {
            var e = event.charCode;
            if (myValidtion == "onlyAlphabets") {
                if (!(e >= 65 && e <= 120) && (e != 32 && e != 0)) {
                    event.preventDefault();
                }
            }
            if (myValidtion == "onlyAlphabetsAndNumbers") {
                if (!(e >= 65 && e <= 120) && !(e >= 48 && e <= 57)) {
                    event.preventDefault();
                }
            }
            if (myValidtion == "allowAll") {
            }
        };
        div.appendChild(textbox);
        return div;
    };
    htmlElementCreation.prototype.createbutton = function (divid, buttonid, buttontext, myClickEvent) {
        var div = this.divhtml(divid);
        var button = document.createElement('input');
        button.id = buttonid;
        button.value = buttontext;
        button.type = 'Submit';
        //button.onsubmit=myClickEvent;
        //button.onclick=myClickEvent;
        var your_form = document.getElementById('myForm');
        your_form.onsubmit = myClickEvent;
        div.appendChild(button);
        return div;
    };
    htmlElementCreation.prototype.createhyperlink = function (divid, hyperid, hypertext, hyperhref, myfunc) {
        var div = this.divhtml(divid);
        var hyperlink = document.createElement('a');
        var linkText = document.createTextNode(hypertext);
        hyperlink.appendChild(linkText);
        hyperlink.title = hypertext;
        hyperlink.href = hyperhref;
        hyperlink.addEventListener("click", myfunc, false);
        div.appendChild(hyperlink);
        return div;
    };
    return htmlElementCreation;
}(creatediv));
exports.htmlElementCreation = htmlElementCreation;
