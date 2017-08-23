
//  var onlyAlphabets=function (event){
//      var e = event.charCode;
//      if(!(e >= 65 && e <= 120) && (e != 32 && e != 0)) { 
//         event.preventDefault(); 
//      }
//  }
// var onlyAlphabetsAndNumbers=function (event){
//     var e = event.charCode;
//     if(!(e >= 65 && e <= 120) &&  !(e>=48 &&e<=57)) { 
//        event.preventDefault(); 
//     }
// }

class creatediv {
    divhtml(divid) {
        var div = document.createElement('div');
        div.setAttribute('id', divid);
        div.setAttribute('align', 'center');
        return div;
    }

}

export class htmlElementCreation  extends creatediv{

  createImage(divid,imageUrl,imgWidth,imgHeight)
  {
    var div = this.divhtml(divid);
    var newImage = document.createElement('img');
    newImage.src=imageUrl;
    newImage.width=imgWidth;
    newImage.height=imgHeight;
    div.appendChild(newImage);
    return div;
  }
    
    createLabels(divid, labeltext) {
        var div = this.divhtml(divid);

        var newSpan = document.createElement('span');
        newSpan.innerHTML = labeltext;
        div.appendChild(newSpan);
        return div;
    }

    createtextboxes(divid, textid, typetext,myValidtion) {
        var div = this.divhtml(divid);

        var textbox = document.createElement('input');
        textbox.type = 'text';
        textbox.setAttribute('id', textid);
        textbox.setAttribute('type', typetext);
       // textbox.setAttribute('onkeypress',myValidtion);
        
        //alert(htmlElementCreation.prototype.myVa);
     //alert(window["onlyAlphabets"]);
     
        textbox.onkeypress=   function (event){
            var e = event.charCode;
            //alert(myValidtion);
            if(myValidtion=="onlyAlphabets")
                {
                   
                    if(!(e >= 65 && e <= 120) && (e != 32 && e != 0)) { 
                       event.preventDefault(); 
                    }
                }
                if(myValidtion=="onlyAlphabetsAndNumbers"){
                    
                    if(!(e >= 65 && e <= 120) &&  !(e>=48 &&e<=57)) { 
                       event.preventDefault(); 
                    }
                }
                if(myValidtion=="allowAll"){
                }
            
        };
        //alert(myValidtion);

      

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


    createhyperlink(divid, hyperid, hypertext, hyperhref,myfunc) {
        var div = this.divhtml(divid);

        var hyperlink = document.createElement('a');
        var linkText = document.createTextNode(hypertext);
        hyperlink.appendChild(linkText);
        hyperlink.title = hypertext;
        hyperlink.href = hyperhref;
        
        hyperlink.addEventListener("click", myfunc, false);
        div.appendChild(hyperlink);
        return div;

    }
   


}

