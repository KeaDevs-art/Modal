'use strict';

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        for (let i = 0; i < document.querySelectorAll("div").length; i++) {
            document.querySelectorAll("div")[i].classList.add("hidden");
        }
    }
});


document.querySelector(".overlay").addEventListener("click", function () {
    for (let i = 0; i < document.querySelectorAll("div").length; i++) {
        document.querySelectorAll("div")[i].classList.add("hidden");
    }
});

for (let i = 0; i < document.querySelectorAll(".show-modal").length; i++) {
    document.querySelectorAll(".show-modal")[i].addEventListener("click", function () {
        for (let i = 0; i < document.querySelectorAll("div").length; i++) {
            document.querySelectorAll("div")[i].classList.remove("hidden");
        }
    });
}

document.querySelector(".close-modal").addEventListener("click", function () {
    for (let i = 0; i < document.querySelectorAll("div").length; i++) {
        document.querySelectorAll("div")[i].classList.add("hidden");
    }
});


