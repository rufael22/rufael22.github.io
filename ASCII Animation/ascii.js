(function () {
    "use strict";

    window.onload = function () {
        document.getElementById("animations").onchange = animaitonPage;
        document.getElementById("fontSize").onchange = animationSize;
        document.getElementById("start").onclick = startAnimation;
        document.getElementById("stop").onclick = stopAnimation;
        document.getElementById("turbo").onchange = animationSpeed;
    };

    function animaitonPage() {
        let choice = document.getElementById("animations");
        let view = document.getElementById("viewboard");
        if (choice.value === "blank") {
            view.innerHTML = BLANK;
            view.readOnly = true;
        }
        else if (choice.value === "exercise") {
            view.innerHTML = EXERCISE;
            view.readOnly = true;
        }
        else if (choice.value === "juggler") {
            view.innerHTML = JUGGLER;
            view.readOnly = true;
        }
        else if (choice.value === "bike") {
            view.innerHTML = BIKE;
            view.readOnly = true;
        }
        else if (choice.value === "dive") {
            view.innerHTML = DIVE;
            view.readOnly = true;
        }
        else if (choice.value === "custom") {
            view.innerHTML = CUSTOM;
            view.readOnly = false;
        }
    }

    function animationSize() {
        let choice = document.getElementById("fontSize");
        let view = document.getElementById("viewboard");
        if (choice.value === "t") {
            view.style.fontSize = "7pt";
        }
        else if (choice.value === "s") {
            view.style.fontSize = "10pt";
        }
        else if (choice.value === "m") {
            view.style.fontSize = "12pt";
        }
        else if (choice.value === "l") {
            view.style.fontSize = "16pt";
        }
        else if (choice.value === "xl") {
            view.style.fontSize = "24pt";
        }
        else if (choice.value === "xxl") {
            view.style.fontSize = "32pt";
        }
    }

    var x = null;
    var i;
    var speed;

    function startAnimation() {
        let view = document.getElementById("viewboard");
        let animateArray = view.innerHTML.split("=====");

        function animate() {
            if (i === undefined) {
                i = 0
            }
            else if (i < (animateArray.length - 1)) {
                i += 1;
            }
            else if (i === (animateArray.length - 1)) {
                i = 0;
            }

            clearInterval(x);
            animationSpeed();
            view.innerHTML = animateArray[i];
            x = setInterval(animate, animationSpeed());
        }
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        document.getElementById("animations").disabled = true;
        x = setInterval(animate, animationSpeed());
    }

    function stopAnimation() {
        clearInterval(x);
        i = 0;
        animaitonPage();
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("animations").disabled = false;
    }

    function animationSpeed() {
        let turboChk = document.getElementById("turbo");
        if (turboChk.checked) {
            speed = 50;
        }
        else {
            speed = 250;
        }
        return speed;
    }

})();