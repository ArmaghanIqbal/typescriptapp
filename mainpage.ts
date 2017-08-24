import * as impoertcalllog from './htmlcontrolsclass';

window.onload = function MainPageHTML() {

    let lo = new mainPage();
    lo.mainPageFunction();
}
export class mainPage {
    mainPageFunction() {
        document.title = 'Main Page';



        // get the refference of the main Div
        var mainDiv = document.getElementById('MainDiv');

        var element = document.getElementById('ParentDiv');
        if (element != null) {
            element.remove();
        }
        var hs = document.getElementsByTagName('style');
        for (var i=0, max = hs.length; i < max; i++) {
            hs[i].parentNode.removeChild(hs[i]);
        }

        var ParentDiv = document.createElement('div');
        ParentDiv.setAttribute('id', 'ParentDiv');
        ParentDiv.setAttribute('align', 'center');
        var x = document.createElement("STYLE");
        var t = document.createTextNode('ul {list-style-type: none;position: fixed; margin: 0;  padding: 0;  overflow: hidden; background-color: #333; } li {float: left; } li a {display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none; } li a:hover { background-color: #111; }');
        x.appendChild(t);
        document.head.appendChild(x);

        let html1 = new impoertcalllog.htmlElementCreation();
        ParentDiv.appendChild(html1.createImage('divImg', '~/../images/sandcastle.png', 100, 100));
        ParentDiv.appendChild(html1.createMenu('divMenu', 'Dachboard,Users,Courses', 'this is Dachboard,this is Users,this is Courses'));
        mainDiv.appendChild(ParentDiv);
    }
}