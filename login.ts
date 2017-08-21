class creatediv {
    divhtml(divid) {
        var div = document.createElement('div');
        div.setAttribute('id', divid);
        div.setAttribute('align', 'center');
        return div;
    }

}

class htmlElementCreation  extends creatediv{
    createLabels(divid, labeltext) {
        var div = this.divhtml(divid);

        var newSpan = document.createElement('span');
        newSpan.innerHTML = labeltext;
        div.appendChild(newSpan);
        return div;
    }

    createtextboxes(divid, textid,txttype) {
        var div = this.divhtml(divid);

        var textbox = document.createElement('input');
        textbox.type = 'text';
        textbox.setAttribute('id', textid);
        textbox.setAttribute('type', txttype);

        div.appendChild(textbox);
        return div;

    }

    createbutton(divid, buttonid, buttontext) {
        var div = this.divhtml(divid);

        var button = document.createElement('input');
        button.id = buttonid;
        button.value = buttontext;
        button.type = 'Submit';

        div.appendChild(button);
        return div;

    }


    createhyperlink(divid, hyperid, hypertext, hyperhref) {
        var div = this.divhtml(divid);

        var hyperlink = document.createElement('a');
        var linkText = document.createTextNode(hypertext);
        hyperlink.appendChild(linkText);
        hyperlink.title = hypertext;
        hyperlink.href = hyperhref;
     
        div.appendChild(hyperlink);
        return div;

    }



}

window.onload = function LoginPageHTML() {
 
        let lo=new Login();
        lo.LoginPageFunction();
    }
    class Login extends htmlElementCreation {
       
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
        let  html1 = new htmlElementCreation();

       
        ParentDiv.appendChild(html1.createLabels('div1', 'UserName'));
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtUsername','Text'));

        ParentDiv.appendChild(html1.createLabels('div3', 'Password'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtPassword','Password'));

        // ParentDiv.appendChild(html1.createLabels('div5', 'Country'));
        // ParentDiv.appendChild(html1.createtextboxes('div6', 'txtcountry'));

        // ParentDiv.appendChild(html1.createLabels('div7', 'Password'));
        // ParentDiv.appendChild(html1.createtextboxes('div8', 'txtpassword'));

        // ParentDiv.appendChild(html1.createLabels('div9', 'Confirm Password'));
        // ParentDiv.appendChild(html1.createtextboxes('div10', 'txtconfirmpassword'));

         ParentDiv.appendChild(html1.createbutton('div5', 'btnsignIn', 'Sign In'));
         ParentDiv.appendChild(html1.createhyperlink('div6', 'hypersignUp', 'or Sign Up', '#'));


        mainDiv.appendChild(ParentDiv);
    }
}




