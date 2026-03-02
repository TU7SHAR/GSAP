document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector("#cursor");
  const hoverTargets = document.querySelectorAll(".hover-target");

  window.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      duration: 0.6,
      ease: "back.out(1.7)",
    });
  });

  let stringContainers = document.querySelectorAll(".string-container");
  let initialPath = `M -1000 100 Q 500 100 1500 100`;

  stringContainers.forEach((container) => {
    let path = container.querySelector(".string");
    let svg = container.querySelector("svg");

    svg.addEventListener("mousemove", (dets) => {
      let newPath = `M -1000 100 Q ${dets.offsetX} ${dets.offsetY} 1500 100`;
      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out",
      });
    });

    svg.addEventListener("mouseleave", () => {
      gsap.to(path, {
        attr: { d: initialPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    });
  });

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

  document.querySelector("#side").addEventListener("click", () => tl.play());
  document
    .querySelector("#sidebar i")
    .addEventListener("click", () => tl.reverse());

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

  gsap.to("#page2 h1", {
    transform: "translateX(-200%)",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      scrub: true,
      pin: true,
      start: "top 0%",
      end: "top -200%",
    },
  });
});
