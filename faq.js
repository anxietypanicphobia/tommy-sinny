let checkbox1 = document.querySelector(".checkbox");

let dsds = 0

checkbox1.addEventListener("click", function(){
    let main1 = document.querySelector("main")
    if (dsds != 1){
        main1.style.filter = "brightness(0.5)"
        main1.style.transition = "0.5s"
        dsds = 1
    }

    else {
        main1.style.filter = "brightness(1)"
        dsds = 0
    }
});