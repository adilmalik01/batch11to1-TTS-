

let resultBox = document.querySelector(".box")
let userInput = document.querySelector("#colorInput")
let body = document.querySelector("body")


userInput.addEventListener("input", () => {
    // console.log("Hello World");

    body.style.backgroundColor = userInput.value
    
})



