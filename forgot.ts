import * as impoertcallreg from './htmlcontrolsclass';
class forgot {
    forgothtmlpage() {

        document.title = 'Forgot Password';
        document.getElementById('ParentDiv').remove();

        // get the refference of the main Div
        var mainDiv = document.getElementById('MainDiv');

        var ParentDiv = document.createElement('div');
        ParentDiv.setAttribute('id', 'ParentDiv');
        ParentDiv.setAttribute('align', 'center');



        var html1 = new impoertcallreg.htmlElementCreation();

        ParentDiv.appendChild(html1.createLabels('div1', 'Email'));
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtemail','Text'));

        ParentDiv.appendChild(html1.createLabels('div3', 'New Password'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtnewpassword','Password'));

        ParentDiv.appendChild(html1.createLabels('div5', 'Confirm Password'));
        ParentDiv.appendChild(html1.createtextboxes('div6', 'txtconfirmpassword','Password'));
        
        ParentDiv.appendChild(html1.createbutton('div7', 'btnresetpassword','Rest Password'));

        ParentDiv.appendChild(html1.createhyperlink('div8', 'hypersignin','or Sign In','#'));
        ParentDiv.appendChild(html1.createhyperlink('div9', 'hypersignup','or Sign Up','#'));


        mainDiv.appendChild(ParentDiv);

    }
}
