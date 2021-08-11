let headBar = document.createElement("div");
let logo = document.createElement("img");
let textBar = document.createElement("div");
let navBar = document.createElement("div");
let facebookIco = document.createElement("img");
let instagramIco = document.createElement("i");
let infoBar = document.createElement("div");
let infoText = document.createElement("span");
let addressBar = document.createElement("div");
let addressText = document.createElement("span");

setAttributes(navBar, {"id": "navBar"});
setAttributes(headBar, {"id": "headBar", "class": "headBar"});
setAttributes(logo, {"id": "logoImage", "src": "index.png", "class": "logoImagePassive"});
setAttributes(textBar, {"class": "hiddenTextBar"});
//setAttributes(facebookIco, {"src": "./imgs/fb_ico.png", "class": "fbIco"});
//setAttributes(instagramIco, {"class": "fa fa-instagram"});
//setAttributes(infoText, {"id": "infoText"});
//setAttributes(addressText, {"id": "addressText"});
//setAttributes(addressBar, {"id": "addressBar"});
//setAttributes(infoBar, {"id": "infoBar"});
//.innerHTML = "blablabla@gmail.com <br /> 374 99 099 020";
//addressText.innerHTML = "Ք․ Երևան, Պարույր Սևակի 51/2";
textBar.innerHTML = "Soon!";

logo.addEventListener("click", function () {
    logo.setAttribute("class", "logoImageActive");
    textBar.setAttribute("class", "animate__animated animate__fadeInUp activeTextBar")
})

document.body.append(headBar);
headBar.append(logo);
headBar.append(textBar);
//document.body.append(navBar);
infoBar.append(facebookIco);
//infoBar.append(instagramIco);
//infoBar.append(infoText);
//addressBar.append(addressText);
//navBar.append(infoBar);
//navBar.append(addressBar);



function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}