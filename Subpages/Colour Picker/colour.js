const hexCodes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
const RGBlist = ["0", "0", "0"]
const currentHEX = ["#", "00", "00", "00"]

function printB (x) {
    hex1 = hexCodes[Math.floor(x/16)];
    hex2start = x/16;
    for (let i = hex2start; i >= 1; i--) {
        hex2start -= 1;
    }
    hex2 = hexCodes[hex2start*16];
    collectRGB("b" + hex1 + hex2);

}
function printG (x) {
    hex1 = hexCodes[Math.floor(x/16)];
    hex2start = x/16;
    for (let i = hex2start; i >= 1; i--) {
        hex2start -= 1;
    }
    hex2 = hexCodes[hex2start*16];
    collectRGB("g" + hex1 + hex2);
}
function printR (x) {
    hex1 = hexCodes[Math.floor(x/16)];
    hex2start = x/16;
    for (let i = hex2start; i >= 1; i--) {
        hex2start -= 1;
    }
    hex2 = hexCodes[hex2start*16];
    collectRGB("r" + hex1 + hex2);
}



function collectRGB (hexKey) {
    if (hexKey.includes("b")) {
        newHexKey = hexKey.replace("b", "");
        currentHEX[3] = newHexKey;
    } else if (hexKey.includes("g")) {
        newHexKey = hexKey.replace("g", "");
        currentHEX[2] = newHexKey;
    } else if (hexKey.includes("r")) {
        newHexKey = hexKey.replace("r", "");
        currentHEX[1] = newHexKey;
    }
    document.getElementById("wheel").style.backgroundColor = currentHEX.join("");
    document.getElementById("hex-output").value = currentHEX.join("");
}

function colorFromHEX (hexKeyHash) {
    if (hexKeyHash.length === 7) {
        if (hexKeyHash.includes("#")) {
            document.getElementById("wheel").style.backgroundColor = hexKeyHash;
            hexKey = hexKeyHash.replace("#", "");
            currentHEX[1] = hexKey[0] + hexKey[1];
            currentHEX[2] = hexKey[2] + hexKey[3];
            currentHEX[3] = hexKey[4] + hexKey[5];
            for (let i = 0; i < 5; i+=2) {
                RGBlist[i/2] = ((hexCodes.indexOf(hexKey[i]))*16)+(hexCodes.indexOf(hexKey[i+1]));
            }
            document.getElementById("rgb-red").value = RGBlist[0];
            document.getElementById("rgb-green").value = RGBlist[1];
            document.getElementById("rgb-blue").value = RGBlist[2];
        }
    }
}


function copyHex() {
    var copyText = document.getElementById("hex-output");
    copyText.select();
    copyText.setSelectionRange(0, 10);
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(document.createRange());
}
