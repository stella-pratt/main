
/* does all the menu stuff and button when you scroll below 50 */
window.onscroll = function () {scroll_detect()};
function scroll_detect() {
    if (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height =
            "100px";
        document.getElementById("logo_header").style.height =
            "70px";
        document.getElementById("logo_header").style.top =
            "15px";
        document.getElementById("header_text").style.fontSize =
            "30px";
        document.getElementById("header_position").style.left =
            "250px";
        document.getElementById("header_position").style.top =
            "25px";
        document.getElementById("icon-header").style.fontSize =
            "50px";
        document.getElementById("back2top").style.opacity = "1";
        document.getElementById("back2top").style.cursor = "pointer";
    } else {
        document.getElementById("header").style.height =
            "180px";
        document.getElementById("logo_header").style.height =
            "130px";
        document.getElementById("logo_header").style.top =
            "25px";
        document.getElementById("header_text").style.fontSize =
            "50px";
        document.getElementById("header_position").style.left =
            "300px";
        document.getElementById("header_position").style.top =
            "45px";
        document.getElementById("icon-header").style.fontSize =
            "100px";
        document.getElementById("back2top").style.opacity = "0";
        document.getElementById("back2top").style.cursor = "default";
    }
}

/* Opens menu */
function openNav() {
    document.getElementById("side-menu").style.width = "400px";
    document.getElementById("menu_fade").style.zIndex= "2";
    document.getElementById("menu_fade").style.opacity= "1";
}
/* Closes menu */
function closeNav() {
    document.getElementById("side-menu").style.width= "0";
    document.getElementById("menu_fade").style.zIndex= "-1";
    document.getElementById("menu_fade").style.opacity= "0";
}

/* goes to top when button is clicked */
function gototop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* Closes the loading Page 8*/
function loadingpage() {
    document.getElementById("loading").style.opacity= "0";
    document.getElementById("loading").style.zIndex= "-1";
    document.body.style.overflow= "visible";
}

