function animateMarque() {
  let tween = gsap.to("#marque", {
    xPercent: -100,
    duration: 4,
    repeat: -1,
    ease: "none",
  });
  let tween2 = gsap.to("#marque2", {
    xPercent: -100,
    duration: 4,
    repeat: -1,
    ease: "none",
  });

  window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      gsap.to(tween, { timeScale: 1, duration: 0.5 });
      gsap.to("#marque i", { rotate: 180 });
    } else {
      gsap.to(tween, { timeScale: -1, duration: 0.5 });
      gsap.to("#marque i", { rotate: 0 });
    }
    if (dets.deltaY > 0) {
      gsap.to(tween, { timeScale: -1, duration: 0.5 });
      gsap.to("#marque2 i", { rotate: 0 });
    } else {
      gsap.to(tween, { timeScale: 1, duration: 0.5 });
      gsap.to("#marque2 i", { rotate: 180 });
    }
  });
}

animateMarque();
