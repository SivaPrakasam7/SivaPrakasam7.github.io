var spn = 0

function clickspin() {
    document.getElementsByClassName("cube")[0].style.animation="none";
    ids = ["cube-right", "cube-front", "cube-left", "cube-back", "cube-bottom", "cube-top"]
    spin = ["translate(-50%, -50%) rotateY(-90deg)", "translate(-50%, -50%) rotateY(0deg)", "translate(-50%, -50%) rotateY(90deg)", "translate(-50%, -50%) rotateY(180deg)", "translate(-50%, -50%) rotateY(360deg) rotateX(90deg)", "translate(-50%, -50%) rotateY(360deg) rotateX(-90deg)"];
    for (var i = 0; i < ids.length; i++) {
        if (spn == i) {
            panelshow(document.getElementById(ids[spn]), spin[spn]);
        } else {
            panelhide(document.getElementById(ids[i]));
        }
    }
    if (spn == 6) {
        spn = 0;
        document.getElementsByClassName("cube")[0].style.animation="";
    } else { spn++; }
}

function panelhide(id) {
    id.childNodes[1].style.width = "10vw";
    id.childNodes[1].style.height = "10vh";
    id.childNodes[1].style.opacity = "0";
}

function panelshow(id,spns) {
    tprocess(id);
    id.parentNode.style.transform = spns;
    if (window.screen.width <= 426) {
        id.childNodes[1].style.width = "80vw";
        id.childNodes[1].style.height = "70vh";
    } else {
        id.childNodes[1].style.width = "60vw";
        id.childNodes[1].style.height = "60vh";
    }
    id.childNodes[1].style.opacity = "1";
}


function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
}

function bubble(id) {
    beep();
    sbl = id.parentNode.childNodes;
    for (var i = 0; i < sbl.length; i++) {
        if (sbl[i].nodeName == "DIV") {
            sbl[i].style.background = "none"
        }
    }
    id.style.background = "var(--mpcolor)";
}


function clip() {
    x = document.getElementById("mobile");
    x.select();
    x.setSelectionRange(0, -1);
    document.execCommand("copy");
    alert("Mobile " + x.value + " Copied!")
}


$(document).ready(function () {
    // Typing effect
    let TC = new TypeControl(document.getElementById("typing"), ["Hi, If you want", "To know about me", "SPIN the cube"], 1, 100);
    TC.start();

    // Infopanel clickable view
    $('span').on("click", function (e) {
        if (this.previousElementSibling.style.width == "fit-content") {
            this.style.transform = "rotate(-45deg)";
            this.previousElementSibling.style.width = "0rem";
            this.childNodes[1].style.display = "block";
            this.style.animationPlayState = "";
        } else {
            this.style.transform = "rotate(135deg)";
            this.previousElementSibling.style.width = "fit-content";
            this.childNodes[1].style.display = "none";
            this.style.animationPlayState = "paused";
        }
        e.stopPropagation();
        e.preventDefault();
    });
    $('h4').on("click", function (e) {
        if (this.nextElementSibling.style.display == "flex") {
            this.childNodes[1].style.transform = "rotate(-45deg)";
            this.nextElementSibling.style.display = "none";
        } else {
            this.childNodes[1].style.transform = "rotate(45deg)";
            this.nextElementSibling.style.display = "flex";
        }
        e.stopPropagation();
        e.preventDefault();
    });
});


// Typing effect 

class TypeControl {
    constructor(id, tt, n, sp) {
        this.t = n;
        this.i = 0;
        this.id = id;
        this.txt = tt;
        this.j = 0;
        this.speed = sp;
    }

    start() {
        setTimeout(this.typeWriter.bind(this), this.speed);
    }

    typeWriter() {
        if (this.i < this.txt[this.j].length & this.t == 1) {
            this.id.innerHTML += this.txt[this.j].charAt(this.i);
            this.i++;
            setTimeout(this.typeWriter.bind(this), this.speed);
        } else if (this.t == 1) {
            setTimeout(this.typeDel.bind(this), this.speed);

        } else if (this.i < this.txt[this.j].length & this.t == 0) {
            // beep();
            this.id.innerHTML += this.txt[this.j].charAt(this.i).replace(";", "<br>").replace("~", "<div id='timedate'></div>");
            this.i++;
            setTimeout(this.typeWriter.bind(this), this.speed);
        }
    }

    typeDel() {
        this.x = this.id.innerText;
        if (0 < this.x.length) {
            this.id.innerHTML = this.x.slice(0, -1);
            this.i--;
            setTimeout(this.typeDel.bind(this), this.speed);
        } else {
            setTimeout(this.typeWriter.bind(this), this.speed);
            if (this.txt.length - 1 > this.j) { this.j++; } else { this.j = 0; }
        }
    }
}

function tprocess(id) {
    try {
        id.onmouseover = function () { return false; }
    } catch {
        //pass
    }
    try {
        for (var i = 0; i < id.childNodes.length; i++) {
            if (id.childNodes[i].nodeName == "#text") {
                cont = id.childNodes[i].textContent.trim();
                if (cont != "") {
                    cprocess(id, cont);
                }
            }
            tprocess(id.childNodes[i]);
        }
    } catch {
        //pass
    }
}

function cprocess(id, cont) {
    speed = 100;
    id.innerText = "";
    let TC = new TypeControl(id, [cont], 0, speed);
    TC.start();
}