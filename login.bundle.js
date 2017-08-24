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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var impoertcalllog = __webpack_require__(0);
var reg = __webpack_require__(2);
var forgotPwd = __webpack_require__(3);
var mainpage = __webpack_require__(4);
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
        var x = document.createElement("STYLE");
        var t = document.createTextNode('#ParentDiv {position: absolute;    border: 1px solid black;        width: 500px;            height: 450px;           z-index: 15;            top: 30%;            left: 50%;            margin: -100px 0 0 -250px;            background: lightgrey; } input[type="text"], input[type="password"] {            padding: 0;       width:400px;     height: 30px;            position: relative;            left: 0;            outline: none;            border: 1px solid #cdcdcd;            border-color: rgba(0,0,0,.15);            background-color: white;            font-size: 16px; } span{ margin-left: -8.3cm; } div{margin-top:8px} img{margin-top:-60%; position:relative}');
        x.appendChild(t);
        document.head.appendChild(x);
        var html1 = new impoertcalllog.htmlElementCreation();
        ParentDiv.appendChild(html1.createImage('divImg', '~/../images/smily.jpg', 100, 100));
        ParentDiv.appendChild(html1.createLabels('div1', 'UserName'));
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtUsername', 'Text', "onlyAlphabets", true));
        ParentDiv.appendChild(html1.createLabels('div3', 'Password'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtPassword', 'Password', "onlyAlphabetsAndNumbers", true));
        ParentDiv.appendChild(html1.createbutton('div5', 'btnsignIn', 'Sign In', goToMainPage));
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
    return false;
}
function goToForgotPassword() {
    var pwd = new forgotPwd.forgot;
    pwd.forgothtmlpage();
    return false;
}
function goToMainPage() {
    //alert('test');
    var mp = new mainpage.myMainPage;
    mp.mainPageFunction();
    return false;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var impoertcallreg = __webpack_require__(0);
var login = __webpack_require__(1);
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
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtfullname', 'Text', "onlyAlphabets", true));
        ParentDiv.appendChild(html1.createLabels('div3', 'Email'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtemail', 'Text', "onlyAlphabetsAndNumbers", true));
        ParentDiv.appendChild(html1.createLabels('div5', 'Country'));
        ParentDiv.appendChild(html1.createtextboxes('div6', 'txtcountry', 'Text', "allowAll", true));
        ParentDiv.appendChild(html1.createLabels('div7', 'Password'));
        ParentDiv.appendChild(html1.createtextboxes('div8', 'txtpassword', 'Password', "onlyAlphabetsAndNumbers", true));
        ParentDiv.appendChild(html1.createLabels('div9', 'Confirm Password'));
        ParentDiv.appendChild(html1.createtextboxes('div10', 'txtconfirmpassword', 'Password', "onlyAlphabetsAndNumbers", true));
        ParentDiv.appendChild(html1.createbutton('div11', 'btnregister', 'Register', RegisterSave));
        ParentDiv.appendChild(html1.createhyperlink('div12', 'hypersignin', 'or Sign In', '', gotoLogin));
        mainDiv.appendChild(ParentDiv);
    };
    return register;
}());
exports.register = register;
function gotoLogin() {
    var lo = new login.Login;
    lo.LoginPageFunction();
}
function RegisterSave() {
    alert('this is registration save!!!');
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var impoertcallreg = __webpack_require__(0);
var login = __webpack_require__(1);
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
        ParentDiv.appendChild(html1.createImage('divImg', '~/../images/smily.jpg', 100, 100));
        ParentDiv.appendChild(html1.createLabels('div1', 'Email'));
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtemail', 'Text', "onlyAlphabetsAndNumbers", true));
        ParentDiv.appendChild(html1.createLabels('div3', 'New Password'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtnewpassword', 'Password', "onlyAlphabetsAndNumbers", true));
        ParentDiv.appendChild(html1.createLabels('div5', 'Confirm Password'));
        ParentDiv.appendChild(html1.createtextboxes('div6', 'txtconfirmpassword', 'Password', "onlyAlphabetsAndNumbers", true));
        ParentDiv.appendChild(html1.createbutton('div7', 'btnresetpassword', 'Reset Password', resetPassword));
        ParentDiv.appendChild(html1.createhyperlink('div8', 'hypersignin', 'or Sign In', '', gotoLogin));
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
function resetPassword() {
    alert('reset button hittttt!!');
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var impoertcalllog = __webpack_require__(0);
// window.onload = function MainPageHTML() {
//     let lo = new mainPage();
//     lo.mainPageFunction();
// }
var myMainPage = (function () {
    function myMainPage() {
    }
    myMainPage.prototype.mainPageFunction = function () {
        document.title = 'Main Page';
        // get the refference of the main Div
        var mainDiv = document.getElementById('MainDiv');
        var element = document.getElementById('ParentDiv');
        if (element != null) {
            element.remove();
        }
        var hs = document.getElementsByTagName('style');
        for (var i = 0, max = hs.length; i < max; i++) {
            hs[i].parentNode.removeChild(hs[i]);
        }
        var ParentDiv = document.createElement('div');
        ParentDiv.setAttribute('id', 'ParentDiv');
        ParentDiv.setAttribute('align', 'center');
        var x = document.createElement("STYLE");
        var t = document.createTextNode('ul {list-style-type: none;position: fixed; margin: 0;  padding: 0;  overflow: hidden; background-color: #333; } li {float: left; } li a {display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none; } li a:hover { background-color: #111; }');
        x.appendChild(t);
        document.head.appendChild(x);
        var html1 = new impoertcalllog.htmlElementCreation();
        ParentDiv.appendChild(html1.createImage('divImg', '~/../images/sandcastle.png', 100, 100));
        ParentDiv.appendChild(html1.createMenu('divMenu', 'Dachboard,Users,Courses', 'this is Dachboard,this is Users,this is Courses'));
        mainDiv.appendChild(ParentDiv);
        //alert('i am in main page');
    };
    return myMainPage;
}());
exports.myMainPage = myMainPage;


/***/ })
/******/ ]);