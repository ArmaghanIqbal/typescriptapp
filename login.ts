import * as impoertcalllog from './htmlcontrolsclass';
import * as reg from './registration';
import * as forgotPwd from './forgot';
import * as mainpage from './mainpage';

window.onload = function LoginPageHTML() {
 
        let lo=new Login();
        lo.LoginPageFunction();
    }
   export class Login {
       
 LoginPageFunction() {
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

        let  html1 = new impoertcalllog.htmlElementCreation();

        ParentDiv.appendChild(html1.createImage('divImg', '~/../images/smily.jpg',100,100));
        ParentDiv.appendChild(html1.createLabels('div1', 'UserName'));
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtUsername','Text',"onlyAlphabets",true));

        ParentDiv.appendChild(html1.createLabels('div3', 'Password'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtPassword','Password',"onlyAlphabetsAndNumbers",true));
         ParentDiv.appendChild(html1.createbutton('div5', 'btnsignIn', 'Sign In',goToMainPage));
         //let rf=new regForm.register();
         //rf.registerationhtmlpage();
         ParentDiv.appendChild(html1.createhyperlink('div6', 'hypersignUp', 'or Sign Up', '#',goToRegistration));

         ParentDiv.appendChild(html1.createhyperlink('div7', 'hypersignUp', 'Forgot Password?', '#',goToForgotPassword));


        mainDiv.appendChild(ParentDiv);
    }
}

function goToRegistration()
{
  var ll=new reg.register;
  ll.registerationhtmlpage();
  return false;
}

function goToForgotPassword()
{
  var pwd=new forgotPwd.forgot;
  pwd.forgothtmlpage();
  return false;
}
function goToMainPage()
{
   //alert('test');
var mp=new mainpage.myMainPage;
mp.mainPageFunction();
return false;
}