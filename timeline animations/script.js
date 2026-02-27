document.addEventListener("DOMContentLoaded", function () {
  var tl = gsap.timeline({ paused: true });

  tl.to("#full", {
    right: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl.from("#full h4", {
    x: 150,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  });

  tl.from("#full i", {
    opacity: 0,
    duration: 0.3,
  });

  var menu = document.querySelector("#nav i");
  var cross = document.querySelector("#full i");

  // Check if elements exist before adding listeners
  if (menu) {
    menu.addEventListener("click", function () {
      tl.play();
    });
  }

  if (cross) {
    cross.addEventListener("click", function () {
      tl.reverse(); // This reverses the entire timeline
    });
  }
});
