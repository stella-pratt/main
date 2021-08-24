window.addEventListener("load", ()=> {
    let long;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;



            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=en&appid=909d522ae686eb5a75f8b9fc5c963845`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    document.getElementById("degrees").innerHTML = data.main.temp + "°C";
                    // do something with background colour and temperature????


                    const descrip = data.weather[0].description;
                    document.getElementById("description").innerHTML = descrip.charAt(0).toUpperCase() + descrip.slice(1);

                    document.getElementById("timezone").innerHTML = data.name + ", " + data.sys.country;

                    document.getElementById("icon").src = "images/" + data.weather[0].icon + ".png"

                    feelsLike = data.main.feels_like;
                    Temp = data.main.temp;

                });
        });
    }
});

function tempChange (){
    if (document.getElementById("degrees").innerHTML === Temp + "°C"){
        document.getElementById("degrees").innerHTML = "Feels like: " + feelsLike + "°C";
    } else {
        setTimeout(changeBack, 2000);
    }
}

function changeBack () {
    document.getElementById("degrees").innerHTML = Temp + "°C";
}

