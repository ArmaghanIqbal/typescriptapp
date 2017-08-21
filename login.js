"use strict";
exports.__esModule = true;
var impoertcalllog = require("./htmlcontrolsclass");
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
        ParentDiv.appendChild(html1.createLabels('div1', 'UserName'));
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtUsername', 'Text'));
        ParentDiv.appendChild(html1.createLabels('div3', 'Password'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtPassword', 'Password'));
        // ParentDiv.appendChild(html1.createLabels('div5', 'Country'));
        // ParentDiv.appendChild(html1.createtextboxes('div6', 'txtcountry'));
        // ParentDiv.appendChild(html1.createLabels('div7', 'Password'));
        // ParentDiv.appendChild(html1.createtextboxes('div8', 'txtpassword'));
        // ParentDiv.appendChild(html1.createLabels('div9', 'Confirm Password'));
        // ParentDiv.appendChild(html1.createtextboxes('div10', 'txtconfirmpassword'));
        ParentDiv.appendChild(html1.createbutton('div5', 'btnsignIn', 'Sign In'));
        ParentDiv.appendChild(html1.createhyperlink('div6', 'hypersignUp', 'or Sign Up', '#'));
        mainDiv.appendChild(ParentDiv);
    };
    return Login;
}());
