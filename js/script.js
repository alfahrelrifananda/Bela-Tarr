const aside = document.querySelector("aside");
const hamburger = document.getElementsByClassName("hamburger")[0];
const listItems = document.querySelectorAll("li");
const mBig = document.querySelector(".m-big");
const images = document.querySelectorAll(".m");
const texts = document.querySelectorAll(".movie-c");

function lifunc(event) {
  aside.classList.remove("show");
  hamburger.classList.remove("cross");
}
listItems.forEach((li) => {
  li.addEventListener("click", lifunc);
});
hamburger.addEventListener("click", function () {
  aside.classList.toggle("show");
  hamburger.classList.toggle("cross");
});

var slideIndex = 1;
showP(slideIndex);

function plusP(n) {
  showP((slideIndex += n));
}

function showP(n) {
  let i;
  const x = document.getElementsByClassName("paragraph");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    const imagePaths = [
      "../assets/img/satantango.jpg",
      "../assets/img/turin.png",
      "../assets/img/werck.jpg",
      "../assets/img/damn.jpeg",
      "../assets/img/london.jpg",
    ];
    mBig.style.backgroundImage = `url(${imagePaths[index]}`;
    texts.forEach((text, textIndex) => {
      text.style.display = index === textIndex ? "block" : "none";
    });
  });
});
