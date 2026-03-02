const groups = document.querySelectorAll(".string-group");
const svg = document.getElementById("guitar-svg");

groups.forEach((group) => {
  const string = group.querySelector(".string");
  const hitArea = group.querySelector(".hit-area");
  const initialY = parseInt(string.getAttribute("data-y"));

  group.addEventListener("mousemove", (dets) => {
    const rect = svg.getBoundingClientRect();
    const x = ((dets.clientX - rect.left) / rect.width) * 1050;
    const y = ((dets.clientY - rect.top) / rect.height) * 600;

    const newPath = `M 0 ${initialY} Q ${x} ${y} 1000 ${initialY}`;

    gsap.to([string, hitArea], {
      attr: { d: newPath },
      duration: 0.2,
      ease: "bounce.inout",
    });
  });

  group.addEventListener("mouseleave", () => {
    const backPath = `M 0 ${initialY} Q 500 ${initialY} 1000 ${initialY}`;

    gsap.to([string, hitArea], {
      attr: { d: backPath },
      duration: 1.2,
      ease: "elastic.out(1, 1)",
    });
  });
});
