let Path = `M 30 80 Q 500 80 1340 80`;
let finalPath = `M 30 80 Q 500 80 1340 80`;
let string = document.getElementById("string");
string.addEventListener("mousemove", (dets) => {
  path = `M 30 80 Q ${dets.offsetX} ${dets.offsetY} 1340 80`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.05,
    ease: "bounce.out",
  });
});
string.addEventListener("mouseleave", (event) => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1,
    ease: "elastic.out(1,0.1)",
  });
});
