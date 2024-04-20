let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let card5 = document.querySelector(".card5");
let shadow__card1 = document.querySelector(".shadow__card1");
let shadow__card2 = document.querySelector(".shadow__card2");
let shadow__card3 = document.querySelector(".shadow__card3");
let shadow__card4 = document.querySelector(".shadow__card4");
let shadow__card5 = document.querySelector(".shadow__card5");
let checkbox = document.querySelector(".checkbox");


card1.addEventListener("mouseover", function(){
    shadow__card1.style.transition = ".3s";
    shadow__card1.style["boxShadow"] = "inset 0 0 13px rgba(0, 0, 0, 0.25)"
});

card1.addEventListener("mouseout", function(){
    shadow__card1.style.transition = ".3s";
    shadow__card1.style["boxShadow"] = "none"
});

card1.addEventListener("click", function(){
    window.location.href = "tribal.html"
});

card2.addEventListener("mouseover", function(){
    shadow__card2.style.transition = ".3s";
    shadow__card2.style["boxShadow"] = "inset 0 0 13px rgba(0, 0, 0, 0.25)"
});

card2.addEventListener("mouseout", function(){
    shadow__card2.style.transition = ".3s";
    shadow__card2.style["boxShadow"] = "none"
});

card2.addEventListener("click", function(){
    window.location.href = "pass.html"
});

card3.addEventListener("mouseover", function(){
    shadow__card3.style.transition = ".3s";
    shadow__card3.style["boxShadow"] = "inset 0 0 13px rgba(0, 0, 0, 0.25)"
});

card3.addEventListener("mouseout", function(){
    shadow__card3.style.transition = ".3s";
    shadow__card3.style["boxShadow"] = "none"
});

card3.addEventListener("click", function(){
    window.location.href = "timix.html"
});

card4.addEventListener("mouseover", function(){
    shadow__card4.style.transition = ".3s";
    shadow__card4.style["boxShadow"] = "inset 0 0 13px rgba(0, 0, 0, 0.25)"
});

card4.addEventListener("mouseout", function(){
    shadow__card4.style.transition = ".3s";
    shadow__card4.style["boxShadow"] = "none"
});

card4.addEventListener("click", function(){
    window.location.href = "starsprayed.html"
});

card5.addEventListener("mouseover", function(){
    shadow__card5.style.transition = ".3s";
    shadow__card5.style["boxShadow"] = "inset 0 0 13px rgba(0, 0, 0, 0.25)"
});

card5.addEventListener("mouseout", function(){
    shadow__card5.style.transition = ".3s";
    shadow__card5.style["boxShadow"] = "none"
});

card5.addEventListener("click", function(){
    window.location.href = "masqott.html"
});

let count = 0

checkbox.addEventListener("click", function(){
    let main = document.querySelector("main")
    if (count != 1){
        main.style.filter = "brightness(0.5)"
        main.style.transition = "0.5s"
        count = 1
    }

    else {
        main.style.filter = "brightness(1)"
        count = 0
    }
});
