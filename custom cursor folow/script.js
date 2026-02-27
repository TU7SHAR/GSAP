let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let bloc1 = document.getElementById("#bloc1");
let bloc2 = document.getElementById("#bloc2");
let boxes = document.querySelectorAll(".box");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out(4)",
  });
});

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    if (cursor.innerHTML != box.id) cursor.innerHTML += `View ${box.id}`;

    gsap.to(cursor, {
      scale: 4,
      duration: 1,
      opacity: 0.3,
    });
  });

  box.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 1,
    });
  });
});
