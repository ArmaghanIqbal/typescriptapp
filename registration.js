var register = (function () {
    function register() {
    }
    register.prototype.registerationhtmlpage = function () {
        document.title = 'Registration';
        document.getElementById('ParentDiv').remove();
        // get the refference of the main Div
        var mainDiv = document.getElementById('MainDiv');
        var ParentDiv = document.createElement('div');
        ParentDiv.setAttribute('id', 'ParentDiv');
        ParentDiv.setAttribute('align', 'center');
        var html1 = new htmlElementCreation();
        ParentDiv.appendChild(html1.createLabels('div1', 'Full Name'));
        ParentDiv.appendChild(html1.createtextboxes('div2', 'txtfullname'));
        ParentDiv.appendChild(html1.createLabels('div3', 'Email'));
        ParentDiv.appendChild(html1.createtextboxes('div4', 'txtemail'));
        ParentDiv.appendChild(html1.createLabels('div5', 'Country'));
        ParentDiv.appendChild(html1.createtextboxes('div6', 'txtcountry'));
        ParentDiv.appendChild(html1.createLabels('div7', 'Password'));
        ParentDiv.appendChild(html1.createtextboxes('div8', 'txtpassword'));
        ParentDiv.appendChild(html1.createLabels('div9', 'Confirm Password'));
        ParentDiv.appendChild(html1.createtextboxes('div10', 'txtconfirmpassword'));
        ParentDiv.appendChild(html1.createbutton('div11', 'btnregister', 'Register'));
        ParentDiv.appendChild(html1.createhyperlink('div12', 'hypersignin', 'or Sign In', '#'));
        mainDiv.appendChild(ParentDiv);
    };
    return register;
}());
