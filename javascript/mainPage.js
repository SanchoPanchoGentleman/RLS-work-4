// Filter selection buttons
filterSelection("all")
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("images");
    if (c === "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}
// Show filtered elements
function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += " " + arr2[i];
        }
    }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// Add active class to the current control button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//Окно появляющееся при входе на страницу и спрашивающее имя пользователя
// let myName=prompt("What is your name?");
// let result = myName[0].toUpperCase() + myName.slice(1).toLowerCase();
// alert("Hello, " + result + ". We wish you a happy shopping!");


// Buttons for cart animation
function snackBar1() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck1");
        snack.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 1000);
}

function snackBar2() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck2");
    snack.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

function snackBar3() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck3");
    snack.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

function snackBar4() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck4");
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

function snackBar5() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck5");
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

function snackBar6() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck6");
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

function snackBar7() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck7");
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

function snackBar8() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck8");
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

function snackBar9() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck9");
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

function snackBar10() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck10");
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

function snackBar11() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck11");
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}

function snackBar12() {
    // Get the snackbar DIV
    let snack = document.getElementById("snck12");
    snack.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
}


