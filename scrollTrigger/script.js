gsap.to("#page2 h1", {
  transform: "translateX(-40%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: true,
    pin: true,
    markers: true,
    start: "top 0%",
    end: "top -100%",
  },
});
