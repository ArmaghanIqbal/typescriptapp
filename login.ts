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

        let  html1 = new impoertcalllog.htmlElementCreation();

        ParentDiv.appendChild(html1.createImage('divImg', '~/../images/smily.jpg',50,50));
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
}

function goToForgotPassword()
{
  var pwd=new forgotPwd.forgot;
  pwd.forgothtmlpage();
}
function goToMainPage()
{
    
var mp=new mainpage.mainPage;
mp.mainPageFunction();
}