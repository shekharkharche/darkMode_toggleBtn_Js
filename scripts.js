let modeBtn = document.querySelector("button");
let body = document.querySelector("body");
let crrMode = "light";

modeBtn.addEventListener("click" , () => {
    if (crrMode === "light"){
        crrMode = "dark";
    body.classList.add("dark")
    body.classList.remove("light")
    } else{
        crrMode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }

});