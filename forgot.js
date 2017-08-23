"use strict";
exports.__esModule = true;
var impoertcallreg = require("./htmlcontrolsclass");
var login = require("./login");
var reg = require("./registration");
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
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtemail', 'Text', "onlyAlphabetsAndNumbers", true));
        ParentDiv.appendChild(html1.createLabels('div3', 'New Password'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtnewpassword', 'Password', "onlyAlphabetsAndNumbers", true));
        ParentDiv.appendChild(html1.createLabels('div5', 'Confirm Password'));
        ParentDiv.appendChild(html1.createtextboxes('div6', 'txtconfirmpassword', 'Password', "onlyAlphabetsAndNumbers", true));
        // ParentDiv.appendChild(html1.createbutton('div7', 'btnresetpassword','Reset Password'));
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
