function pageLoaded() {
  // enable the scrolling
  $(".page-1").css("position", "initial");

  // make the next-page button clickable
  $(".next-page").click(() => {
    $(window).scrollTop($(window).height());
  });
}

// MAIN
let animationCount = $(".animation").length;
let animationEndedCount = 0;

// disable the scrolling to let the animations play
$(".page-1").css("position", "fixed");

// when one animation ends
$(window).on("animationend", () => {
  animationEndedCount++;

  // when all the animations ended
  if (animationEndedCount >= animationCount) pageLoaded();
});

// loading the map
$(".map-container").mapael({
  map: {
    name: "european_union",
  },
});
