
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

    createtextboxes(divid, textid) {
        var div = this.divhtml(divid);

        var textbox = document.createElement('input');
        textbox.type = 'text';
        textbox.setAttribute('id', textid);

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

