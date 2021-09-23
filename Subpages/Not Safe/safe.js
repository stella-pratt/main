window.addEventListener("load", ()=> {
    const api = `https://ipapi.co/json/`;
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {

            RAM_memory = navigator.deviceMemory;
            city = data.city;
            country = data.country_name;
            internet = data.org;
            logical_cores = navigator.hardwareConcurrency;

            let ua = detect.parse(navigator.userAgent);
            browser = ua.browser.family;
            os = ua.os.name;
            device = ua.device.type;
            referal = document.referrer;
            resolution = screen.width + " x " + screen.height;

            document.getElementById("location").innerHTML = city + ", " + country + "  - Internet provider: " + internet;
            document.getElementById("specs").innerHTML = RAM_memory + ", " + logical_cores + ", " + browser + ", " + os + ", " + device;
            document.getElementById("tests").innerHTML = referal + ", " + resolution;


            let isBatterySupported = 'getBattery' in navigator;
            if(!isBatterySupported) {
                console.log("Battery not supported");
                // put battery not suppoorted by browser in required div
            } else {
                let batteryPromise = navigator.getBattery();
                batteryPromise.then(batteryCallback);

                function batteryCallback(batteryObject) {
                   printBatteryStatus(batteryObject);
                }
                function printBatteryStatus(batteryObject) {
                    battery_percent = batteryObject.level * 100


                    document.getElementById("battery").innerHTML = battery_percent + "%"
                }
            }
    });
});

