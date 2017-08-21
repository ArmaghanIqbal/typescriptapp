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
    htmlElementCreation.prototype.createLabels = function (divid, labeltext) {
        var div = this.divhtml(divid);
        var newSpan = document.createElement('span');
        newSpan.innerHTML = labeltext;
        div.appendChild(newSpan);
        return div;
    };
    htmlElementCreation.prototype.createtextboxes = function (divid, textid, txttype) {
        var div = this.divhtml(divid);
        var textbox = document.createElement('input');
        textbox.type = 'text';
        textbox.setAttribute('id', textid);
        textbox.setAttribute('type', txttype);
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
    htmlElementCreation.prototype.createhyperlink = function (divid, hyperid, hypertext, hyperhref) {
        var div = this.divhtml(divid);
        var hyperlink = document.createElement('a');
        var linkText = document.createTextNode(hypertext);
        hyperlink.appendChild(linkText);
        hyperlink.title = hypertext;
        hyperlink.href = hyperhref;
        div.appendChild(hyperlink);
        return div;
    };
    return htmlElementCreation;
}(creatediv));
window.onload = function LoginPageHTML() {
    var lo = new Login();
    lo.LoginPageFunction();
};
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        var html1 = new htmlElementCreation();
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
}(htmlElementCreation));
