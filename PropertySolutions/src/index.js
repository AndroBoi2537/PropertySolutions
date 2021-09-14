const mobile_links = document.querySelector(".mobile-links");
const hamButton = document.querySelector(".ham");
const firstImg = document.querySelector(".container-3 img");
const imgs = document.querySelectorAll(".imgs img");
const cards = document.querySelectorAll(".card");

mobile_links.style.display = "none";

const DisplayOnView = () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callbacks = (entries) => {
    for (let x = 0; x < cards.length; x++) {
      if (entries.isIntersecting == true) {
        cards[x].classList.add("animate__fadeIn");
      }
    }
  };

  let observer = new IntersectionObserver(callbacks, options);

  observer.observe(cards[1]);

  for (let x = 0; x < cards.length; x++) {
    observer.observe(cards[x]);
  }
};

DisplayOnView();

hamButton.addEventListener("click", () => {
  if (mobile_links.style.display == "none") {
    mobile_links.style.display = "";
  } else {
    mobile_links.style.display = "none";
  }
});

const card1 = document.querySelector(".card-1");
const card4 = document.querySelector(".card-4");
const card5 = document.querySelector(".card-5");

function displayWindowSize() {
  // var w = document.documentElement.clientWidth;
  // var h = document.documentElement.clientHeight;

  // document.getElementById("result").innerHTML =
  //   "Width: " + w + ", " + "Height: " + h;
  const array = [card1, card4, card5];
  if (screen.width < 740) {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }
    for (let x = 0; x < array.length; x++) {
      array[x].style.backgroundColor = " #f0f3fd";
    }
  }
  if (screen.width > 740) {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "";
    }
    card1.style.backgroundColor = "#f0f3fd";
    card4.style.backgroundColor = "white";
    card5.style.backgroundColor = "#f0f3fd";
  }
}

document.body.addEventListener("resize", displayWindowSize);

displayWindowSize();

console.log(screen.width);
