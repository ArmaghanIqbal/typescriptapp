window.onload = function LoginPageHTML() {

    LoginPageFunction();
}



function LoginPageFunction() {
    document.title = 'Login';
    var NewScript = document.createElement('script')
    NewScript.src = "registration.js"
    document.body.appendChild(NewScript);


    // get the refference of the main Div
    var mainDiv = document.getElementById('MainDiv');

    var element = document.getElementById('ParentDiv');
    if (element != null) {
        element.remove();
    }

    var ParentDiv = document.createElement('div');
    ParentDiv.setAttribute('id', 'ParentDiv');
    ParentDiv.setAttribute('align', 'center');

    // create new div that will work as a container
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'innerDiv1');
    newDiv.setAttribute('align', 'center');

    //create span to contain the text
    var newSpan = document.createElement('span');
    newSpan.innerHTML = "UserName :";

    // create new textbox for email entry
    var newTextBox = document.createElement('input');
    newTextBox.type = 'text';
    newTextBox.setAttribute('id', 'txtLogin');


    var newDiv1 = document.createElement('div');
    newDiv1.setAttribute('id', 'innerDiv2');
    newDiv1.setAttribute('align', 'center');

    //create span to contain the text
    var newSpan1 = document.createElement('span');
    newSpan1.innerHTML = "Password :";

    // create new textbox for email entry
    var newTextBox1 = document.createElement('input');
    newTextBox1.type = 'text';
    newTextBox1.setAttribute('id', 'txtPassword');

    var newDiv2 = document.createElement('div');
    newDiv2.setAttribute('id', 'innerDiv3');
    newDiv2.setAttribute('align', 'center');


    // create new textbox for email entry
    var newButton = document.createElement('input');
    newButton.id = 'btnLogin';
    newButton.value = 'Login';
    newButton.type = 'button';


    var newButton1 = document.createElement('input');
    newButton1.id = 'btnRegister';
    newButton1.value = 'Register';
    newButton1.type = 'button';


    /* 
     // create remove button for each email adress
     var newButton = document.createElement('input');
     newButton.type = 'button';
     newButton.value = 'Remove';
     newButton.id = 'btn'+NumOfRow;
     
     }*/

    // atach event for remove button click
    newButton.onclick = function LoginAuth() {
        alert('i am login');
    }

    newButton1.onclick = function RegistrationRedirect() {
        var reg = new registration();
        reg.hello();

    }


    // append the span, textbox and the button
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newTextBox);
    newDiv1.appendChild(newSpan1);
    newDiv1.appendChild(newTextBox1);
    newDiv2.appendChild(newButton);
    newDiv2.appendChild(newButton1);

    // finally append the new div to the main div
    ParentDiv.appendChild(newDiv);
    ParentDiv.appendChild(newDiv1);
    ParentDiv.appendChild(newDiv2);

    mainDiv.appendChild(ParentDiv);
}
