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

        var ParentDiv = document.createElement('div');
        ParentDiv.setAttribute('id', 'ParentDiv');
        ParentDiv.setAttribute('align', 'center');

        let html1 = new impoertcalllog.htmlElementCreation();
        ParentDiv.appendChild(html1.createMenu('divMenu', 'Home,About', 'homefun,aboutfunc'));
        mainDiv.appendChild(ParentDiv);
    }
}