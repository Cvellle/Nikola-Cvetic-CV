// print
const printMe = () => {
    window.print();
}

const printImg = document.querySelector(".print");
printImg.addEventListener("click", printMe);

// volume
document.querySelectorAll("audio").forEach(element => {
    element.volume = 0.4;
});

// on load
// if (window.location.href == "https://cvellle.github.io/Nikola-Cvetic-CV/") {
// }

const all = document.querySelector(".all");
window.addEventListener("load", () => {
    all.style.opacity = 1;
}); window.opacity = 0;
