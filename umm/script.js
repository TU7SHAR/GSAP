// 1. Custom Cursor Follower
window.addEventListener("mousemove", (dets) => {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    ease: "back.out(1.7)",
  });
});

// 2. SVG String Jiggle
let path = document.querySelector("#string");
let container = document.querySelector("#string-container");
let initialPath = `M 10 100 Q 500 100 990 100`;

container.addEventListener("mousemove", (dets) => {
  let newPath = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} 990 100`;
  gsap.to(path, {
    attr: { d: newPath },
    duration: 0.3,
    ease: "power3.out",
  });
});

container.addEventListener("mouseleave", () => {
  gsap.to(path, {
    attr: { d: initialPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});

// 3. Sidebar Timeline
let tl = gsap.timeline({ paused: true });

tl.to("#sidebar", {
  right: 0,
  duration: 0.5,
});

tl.from(".links a", {
  x: 100,
  opacity: 0,
  stagger: 0.1,
});

document.querySelector("#nav i").addEventListener("click", () => tl.play());
document
  .querySelector("#sidebar i")
  .addEventListener("click", () => tl.reverse());

// 4. ScrollTrigger Reveal
gsap.from(".reveal", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#hero",
    start: "top 70%",
  },
});
