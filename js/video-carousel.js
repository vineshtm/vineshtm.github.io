const videoScroll = document.getElementById("videoScroll");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

function updateArrows() {
  const scrollLeft = videoScroll.scrollLeft;
  const maxScroll = videoScroll.scrollWidth - videoScroll.clientWidth;

  if (scrollLeft <= 5) {
    leftBtn.classList.add("hidden");
  } else {
    leftBtn.classList.remove("hidden");
  }

  if (scrollLeft >= maxScroll - 5) {
    rightBtn.classList.add("hidden");
  } else {
    rightBtn.classList.remove("hidden");
  }
}

leftBtn.addEventListener("click", () => {
  videoScroll.scrollBy({
    left: -380,
    behavior: "smooth",
  });
});

rightBtn.addEventListener("click", () => {
  videoScroll.scrollBy({
    left: 380,
    behavior: "smooth",
  });
});

videoScroll.addEventListener("scroll", updateArrows);

window.addEventListener("resize", updateArrows);

updateArrows();
