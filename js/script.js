// volume
document.querySelectorAll("audio").forEach((element) => {
  element.volume = 0.4;
});

// body opacity
window.addEventListener("load", rootFunction);

function rootFunction() {
  document.querySelector("body").style.transition = "2s";
  document.querySelector("body").style.opacity = "1";
}
