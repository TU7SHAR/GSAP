var tl = gsap.timeline();

const box = {
  width: 520,
  height: 633,
};

tl.to("#box1", {
  x: window.innerWidth - box.width,
  //   rotate: -10,
  duration: 1.5,
  delay: 1,
  yoyo: true,
});
tl.to("#box2", {
  x: window.innerWidth - box.width,
  //   rotate: -10,
  duration: 1.5,
  delay: 1,
});
tl.to("#box3", {
  x: window.innerWidth - box.width,
  //   rotate: -10,
  duration: 1.5,
  delay: 1,
  yoyo: true,
});
