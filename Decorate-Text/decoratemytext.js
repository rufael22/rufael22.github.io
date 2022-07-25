"use strict";

window.onload = function () {
    var bdButton = document.getElementById("bd");
    bdButton.onclick = interval;
    var checkBling = document.getElementById("bling");
    checkBling.onchange = blingUp;
    var pigButton = document.getElementById("piglatin");
    pigButton.onclick = pig;
    var malkoButton = document.getElementById("malko");
    malkoButton.onclick = malkov;
}

function showAlert() {
    alert("Hello, World!")
}

function largeText() {
    var size = parseInt(getComputedStyle(document.getElementById("text")).fontSize) * 0.75;
    size += 2;
    document.getElementById("text").style.fontSize = size + "pt";
}

function blingUp() {
    if (document.getElementById("bling").checked == true) {
        document.getElementById("text").style.fontWeight = "Bold";
        document.getElementById("text").style.color = "green";
        document.getElementById("text").style.textDecoration = "underline";
    }
    else {
        document.getElementById("text").style.fontWeight = "";
        document.getElementById("text").style.color = "";
        document.getElementById("text").style.textDecoration = "";
    }

}

function interval() {
    var id = setInterval(largeText, 1000);
    setTimeout(clearInterval, 5000, id);
}

function pig() {
    var words = document.getElementById("text").value;
    var splittedword = words.split(/\s+/);
    var result = "";
    for (var i = 0; i < splittedword.length; i++) {
        if (splittedword[i].charAt(0).match("[aeoiuAEOIU]")) {
            changed = splittedword[i] + "ay";
        } else {
            var word = splittedword[i];
            for (var j = 0; j < word.length; j++) {
                if (word[j].match("[aeoiuAEOIU]")) {
                    var changed = word.substring(j) + word.substring(0, j) + "ay";
                    break;
                }

            }
        }
        result += changed + " ";

    }
    document.getElementById("text").value = result;

}

function malkov() {
    var words = document.getElementById("text").value;
    var arr = words.split(/\s+/);
    var result = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = "Malkovich";
        }
        result += arr[i] + " ";
    }
    document.getElementById("text").value = result;
}