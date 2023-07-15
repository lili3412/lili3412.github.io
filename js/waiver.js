// Problem 1
const figures = document.querySelectorAll("figure");
window.addEventListener("load", function() {
  for(let i = 0; i < figures.length; i++) {
    figures[i].classList.add("one-third");
  }
});

// Problem 2
const footer = document.querySelector("footer")
footer.addEventListener("click", function() {
  footer.style.display = "none";
});

// Problem 3
figures[4].addEventListener("dblclick", function() {
  figures[4].style.visibility = "hidden";
});

// Problem 4
const figcaption = figures[0].querySelector("figcaption");

figcaption.addEventListener("mouseover", function() {
  figcaption.style.fontFamily = "Cursive";
});

figcaption.addEventListener("mouseleave", function() {
  figcaption.style.fontFamily = "";
});

// Problem 5
figcaption.tabIndex = 0;
figcaption.addEventListener("focus", function() {
  figcaption.style.fontFamily = "Cursive";
});

figcaption.addEventListener("blur", function() {
  figcaption.style.fontFamily = "";
});
