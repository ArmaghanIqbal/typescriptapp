/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var impoertcalllog = __webpack_require__(1);
var reg = __webpack_require__(2);
var forgotPwd = __webpack_require__(3);
window.onload = function LoginPageHTML() {
    var lo = new Login();
    lo.LoginPageFunction();
};
var Login = (function () {
    function Login() {
    }
    Login.prototype.LoginPageFunction = function () {
        document.title = 'Login';
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
        ParentDiv.appendChild(html1.createImage('divImg', '/home/mesam/Documents/typescriptapp/typescriptapp/images/smily.jpg', 50, 50));
        ParentDiv.appendChild(html1.createLabels('div1', 'UserName'));
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtUsername', 'Text', "onlyAlphabets"));
        ParentDiv.appendChild(html1.createLabels('div3', 'Password'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtPassword', 'Password', "onlyAlphabetsAndNumbers"));
        ParentDiv.appendChild(html1.createbutton('div5', 'btnsignIn', 'Sign In'));
        //let rf=new regForm.register();
        //rf.registerationhtmlpage();
        ParentDiv.appendChild(html1.createhyperlink('div6', 'hypersignUp', 'or Sign Up', '#', goToRegistration));
        ParentDiv.appendChild(html1.createhyperlink('div7', 'hypersignUp', 'Forgot Password?', '#', goToForgotPassword));
        mainDiv.appendChild(ParentDiv);
    };
    return Login;
}());
exports.Login = Login;
function goToRegistration() {
    var ll = new reg.register;
    ll.registerationhtmlpage();
}
function goToForgotPassword() {
    var pwd = new forgotPwd.forgot;
    pwd.forgothtmlpage();
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
        div.setAttribute('align', 'center');
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
    htmlElementCreation.prototype.createLabels = function (divid, labeltext) {
        var div = this.divhtml(divid);
        var newSpan = document.createElement('span');
        newSpan.innerHTML = labeltext;
        div.appendChild(newSpan);
        return div;
    };
    htmlElementCreation.prototype.createtextboxes = function (divid, textid, typetext, myValidtion) {
        var div = this.divhtml(divid);
        var textbox = document.createElement('input');
        textbox.type = 'text';
        textbox.setAttribute('id', textid);
        textbox.setAttribute('type', typetext);
        // textbox.setAttribute('onkeypress',myValidtion);
        //alert(htmlElementCreation.prototype.myVa);
        //alert(window["onlyAlphabets"]);
        textbox.onkeypress = function (event) {
            var e = event.charCode;
            //alert(myValidtion);
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
        //alert(myValidtion);
        div.appendChild(textbox);
        return div;
    };
    htmlElementCreation.prototype.createbutton = function (divid, buttonid, buttontext) {
        var div = this.divhtml(divid);
        var button = document.createElement('input');
        button.id = buttonid;
        button.value = buttontext;
        button.type = 'Submit';
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var impoertcallreg = __webpack_require__(1);
var login = __webpack_require__(0);
window.onload = function RegistrationPageHTML() {
    var ra = new register();
    ra.registerationhtmlpage();
};
var register = (function () {
    function register() {
    }
    register.prototype.registerationhtmlpage = function () {
        document.title = 'Registration';
        document.getElementById('ParentDiv').remove();
        // get the refference of the main Div
        var mainDiv = document.getElementById('MainDiv');
        var ParentDiv = document.createElement('div');
        ParentDiv.setAttribute('id', 'ParentDiv');
        ParentDiv.setAttribute('align', 'center');
        var html1 = new impoertcallreg.htmlElementCreation();
        ParentDiv.appendChild(html1.createLabels('div1', 'Full Name'));
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtfullname', 'Text', "onlyAlphabets"));
        ParentDiv.appendChild(html1.createLabels('div3', 'Email'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtemail', 'Text', "onlyAlphabetsAndNumbers"));
        ParentDiv.appendChild(html1.createLabels('div5', 'Country'));
        ParentDiv.appendChild(html1.createtextboxes('div6', 'txtcountry', 'Text', "allowAll"));
        ParentDiv.appendChild(html1.createLabels('div7', 'Password'));
        ParentDiv.appendChild(html1.createtextboxes('div8', 'txtpassword', 'Password', "onlyAlphabetsAndNumbers"));
        ParentDiv.appendChild(html1.createLabels('div9', 'Confirm Password'));
        ParentDiv.appendChild(html1.createtextboxes('div10', 'txtconfirmpassword', 'Password', "onlyAlphabetsAndNumbers"));
        ParentDiv.appendChild(html1.createbutton('div11', 'btnregister', 'Register'));
        ParentDiv.appendChild(html1.createhyperlink('div12', 'hypersignin', 'or Sign In', '#', gotoLogin));
        //  ParentDiv.appendChild(html1.createhyperlink('div12', 'hypersignin','or Sign In','#'));
        mainDiv.appendChild(ParentDiv);
    };
    return register;
}());
exports.register = register;
function gotoLogin() {
    var lo = new login.Login;
    lo.LoginPageFunction();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var impoertcallreg = __webpack_require__(1);
var login = __webpack_require__(0);
var reg = __webpack_require__(2);
var forgot = (function () {
    function forgot() {
    }
    forgot.prototype.forgothtmlpage = function () {
        document.title = 'Forgot Password';
        document.getElementById('ParentDiv').remove();
        // get the refference of the main Div
        var mainDiv = document.getElementById('MainDiv');
        var ParentDiv = document.createElement('div');
        ParentDiv.setAttribute('id', 'ParentDiv');
        ParentDiv.setAttribute('align', 'center');
        var html1 = new impoertcallreg.htmlElementCreation();
        ParentDiv.appendChild(html1.createLabels('div1', 'Email'));
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtemail', 'Text', "onlyAlphabetsAndNumbers"));
        ParentDiv.appendChild(html1.createLabels('div3', 'New Password'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtnewpassword', 'Password', "onlyAlphabetsAndNumbers"));
        ParentDiv.appendChild(html1.createLabels('div5', 'Confirm Password'));
        ParentDiv.appendChild(html1.createtextboxes('div6', 'txtconfirmpassword', 'Password', "onlyAlphabetsAndNumbers"));
        ParentDiv.appendChild(html1.createbutton('div7', 'btnresetpassword', 'Rest Password'));
        ParentDiv.appendChild(html1.createhyperlink('div8', 'hypersignin', 'or Sign In', '#', gotoLogin));
        ParentDiv.appendChild(html1.createhyperlink('div9', 'hypersignup', 'or Sign Up', '#', goToRegistration));
        mainDiv.appendChild(ParentDiv);
    };
    return forgot;
}());
exports.forgot = forgot;
function gotoLogin() {
    var lo = new login.Login;
    lo.LoginPageFunction();
}
function goToRegistration() {
    var ll = new reg.register;
    ll.registerationhtmlpage();
}


/***/ })
/******/ ]);