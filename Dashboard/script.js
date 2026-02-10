const slider = document.getElementById("slider");

let scrollAmount = 0;

setInterval(() => {
  slider.scrollLeft += 200;
  scrollAmount += 200;

  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    slider.scrollLeft = 0;
    scrollAmount = 0;
  }
}, 2500);
