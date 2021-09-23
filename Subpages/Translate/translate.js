function translateText() {
    apiBase = "https://api.funtranslations.com/translate/";

    const words = document.getElementById("lang-input").value.split(" ");

    var select = document.getElementById("lang-select");

    var lang = select.value;

    api = apiBase + lang + ".json?text=" + words.join("%20");


    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            try {
                document.getElementById("lang-output").value = data.contents.translated;
            }
            catch (err) {
                document.getElementById("lang-output").value = "😥😥😥";
                alert("Unfortunately you are being rate limited by the API." +
                    "\nTry back later.");

            }
        })
}