const printMe = () => {
    window.print();
}

const printImg = document.querySelector(".print");
printImg.addEventListener("click", printMe);

document.querySelectorAll("audio").forEach(element => {
    element.volume = 0.4;
}); 
