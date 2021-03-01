let animationCount = $(".animation").length;
let animationEndedCount = 0;


function noScroll() {
  window.scrollTo(0, 0);
}

$(window).on("scroll", noScroll);

$(window).on("animationend", () => {
  animationEndedCount++;

  if (animationEndedCount >= animationCount) {
    $(window).off("scroll");
  }
});



$(".map-container").mapael({
  map: {
    name: "european_union",
  },
});
