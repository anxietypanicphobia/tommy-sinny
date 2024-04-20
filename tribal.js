let product__buying = document.querySelector(".product__buying")
let product__buying_true = document.querySelector(".product__buying_true")
let button__back = document.querySelector(".button__back")
let checkbox = document.querySelector(".checkbox");


if (product__buying != null)
    product__buying.addEventListener("click", function(){
        product__buying.style.transition = ".3s"
        product__buying.style.backgroundColor = "#6CC575"
        product__buying.style.color = "white"
        product__buying.innerHTML = "Оплачен"
        product__buying.style.border = "none"
    });

button__back.addEventListener("click", function(){
    window.location.href = "index.html"
});

let toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let timer1, timer2;


product__buying.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
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

// СЛАЙДЕР
