import * as impoertcallreg from './htmlcontrolsclass';
import * as login from './login';
window.onload = function RegistrationPageHTML() {

    let ra = new register();
    ra.registerationhtmlpage();
}
export class register {
    registerationhtmlpage() {


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

    }
}
function gotoLogin() {
    var lo = new login.Login;
    lo.LoginPageFunction();
}
function RegisterSave() {
    alert('this is registration save!!!');
    
}