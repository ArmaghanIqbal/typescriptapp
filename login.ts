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


  
    /*ParentDiv.appendChild(newDiv);
    ParentDiv.appendChild(newDiv1);
    ParentDiv.appendChild(newDiv2);

    mainDiv.appendChild(ParentDiv);*/
}
