
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
    document.getElementById("menu_fade").style.opacity= "1";
    document.getElementById("menu_fade").style.zIndex= "2";
}
/* Closes menu */
function closeNav() {
    document.getElementById("side-menu").style.width= "0";
    document.getElementById("menu_fade").style.opacity= "0";
    document.getElementById("menu_fade").style.zIndex= "-1";
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




counter = 0
msgcounter = 1


function doChat() {
    if (counter === 0) {
        openChat()
    }
    else if (counter === 1) {
        closeChat()
    }
}
function openChat() {
    document.getElementById("chat-box").style.height = "50vh";
    document.getElementById("chat-header").style.bottom = "50vh";
    document.getElementById("chat-button").style.transform = "rotate(45deg)";
    document.getElementById("type-box").style.height = "8vh";
    document.getElementById("convo-box").style.height = "41vh";
    counter = 1
}
function closeChat() {
    document.getElementById("chat-box").style.height = "0";
    document.getElementById("chat-header").style.bottom = "0";
    document.getElementById("chat-button").style.transform = "rotate(0)";
    document.getElementById("type-box").style.height = "0";
    document.getElementById("convo-box").style.height = "0";
    counter = 0
}

window.printText = function (form) {
    var message = form.writings.value;
    if (message !== "") {
        let div = document.createElement("div");
        div.className = "message-user";
        div.id = "msg" + msgcounter;
        var element = document.getElementById("convo-box");
        element.appendChild(div);


        let img = document.createElement("img");
        img.src = "images/user-icom.jpg";
        img.alt = "user";
        img.className = "user-icon";
        var element2 = document.getElementById("msg" + msgcounter);
        element2.appendChild(img);


        let div2 = document.createElement("div");
        div2.className = "user-msg";
        div2.innerHTML = message;
        element2.appendChild(div2);

        let div5 = document.createElement("div");
        div5.className = "clear";
        element.appendChild(div5);

        document.getElementById("convo-box").scrollTop = 100000000000;

        let typing = document.createElement("div");
        typing.className = "typing";
        typing.id = "typ" + msgcounter;
        element.appendChild(typing);

        let typIMG = document.createElement("img");
        typIMG.className = "bot-typing-icon";
        typIMG.src = "images/robo.png";
        typIMG.alt = "bot";
        var typIMGelement = document.getElementById("typ" + msgcounter);
        typIMGelement.appendChild(typIMG);

        let typBox = document.createElement("div");
        typBox.className = "type-dots-box";
        typBox.id = "typBox" + msgcounter;
        typIMGelement.appendChild(typBox);

        let typANI = document.createElement("img");
        typANI.className = "type-dots";
        typANI.src = "images/typing.gif";
        typANI.alt = "typing";
        var typingPos = document.getElementById("typBox" + msgcounter);
        typingPos.appendChild(typANI);

        let div6 = document.createElement("div");
        div6.className = "clear";
        element.appendChild(div6);


        document.getElementById("convo-box").scrollTop = 100000000000;

        document.getElementById("type-write").value="";

        setTimeout(function (){
            let div3 = document.createElement("div");
            div3.className = "message-bot";
            div3.id = "msgb" + msgcounter;
            var element = document.getElementById("convo-box");
            element.appendChild(div3);


            let img2 = document.createElement("img");
            img2.src = "images/robo.png";
            img2.alt = "bot";
            img2.className = "bot-icon";
            var element2 = document.getElementById("msgb" + msgcounter);
            element2.appendChild(img2);

            let div2 = document.createElement("div");
            div2.className = "bot-msg";


            if (message.includes("enviroment") || message.includes("Envrioment")) {
                div2.innerHTML = "<h4>Ralph the Robot</h4><p>The" +
                    " enviroment is and important we should protect it." +
                    " You can help by being conscious of your actions.</p>";
            }
            else if (message.includes("onslow") || message.includes("Onslow")){
                div2.innerHTML = "<h4>Ralph the Robot</h4><p>Onslow college" +
                    " is a school in Wellington, New Zealand.</p>"
            }
            else if (message.includes("favourite") || message.includes("best")) {
                div2.innerHTML = "<h4>Ralph the Robot</h4><p>I love the" +
                    " enviroment above all. You should join the Onslow" +
                    " Enviro Group.</p>"
            }
            else if (message.includes("pages") || message.includes("navigate") || message.includes("page") || message.includes("tab")) {
                div2.innerHTML = "<h4>Ralph the Robot</h4><p>To get to" +
                    " another page on the website got to the menu at the" +
                    " top left. Alternatevly you can navigate from the" +
                    " bottom of the page.</p>"
            }
            // to do more custom replies just put else if here and put in
            // pararmeters.
            else {
                div2.innerHTML = "<h4>Ralph the Robot</h4><p>Sorry Ralph is" +
                " unavaliable at this time." +
                " Please try again later.</p>";
            }
            element2.appendChild(div2);



            let div6 = document.createElement("div");
            div6.className = "clear";
            element.appendChild(div6);

            document.getElementById("convo-box").scrollTop = 100000000000;

            var del = document.getElementById("typ" + msgcounter);
            del.parentNode.removeChild(del);

            document.getElementById("convo-box").scrollTop = 100000000000;
            msgcounter += 1;
        }, 1000)
    }
}
