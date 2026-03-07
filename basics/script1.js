var tl = gsap.timeline({ repeat: -1 });

const getMoveDistance = (selector) => {
  const element = document.querySelector(selector);
  return window.innerWidth - element.offsetWidth;
};

tl.to("#box1", {
  x: () => getMoveDistance("#box1"),
  duration: 1.5,
  delay: 1,
  yoyo: true,
  repeat: 1,
})
  .to("#box2", {
    x: () => getMoveDistance("#box2"),
    duration: 1.5,
    yoyo: true,
    repeat: 1,
    delay: 1,
  })
  .to("#box3", {
    x: () => getMoveDistance("#box3"),
    duration: 1.5,
    yoyo: true,
    repeat: 1,
  });
