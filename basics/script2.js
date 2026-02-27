var tl = gsap.timeline();

tl.from("h2", {
  y: -30,
  duration: 1,
  delay: 0.5,
  opacity: 0,
});
tl.from("span", {
  y: -20,
  duration: 1,
  stagger: 0.3,
  opacity: 0,
});
tl.from("h1", {
  y: -window.innerHeight,
  duration: 2,
  scale: 0.5,
  opacity: 0,
});
