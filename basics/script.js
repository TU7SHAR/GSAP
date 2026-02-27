const box = {
  width: 400,
  height: 400,
};

gsap.from("h1", {
  opacity: 0,
  duration: 1,
  y: 50,
  delay: 1,
  stagger: -0.3,
  yoyo: true,
});

// gsap.to(".box", {
//   x: window.innerWidth - box.width,
//   y: (window.innerHeight - box.height) / 2,
//   duration: 5,
//   delay: 2,
//   rotate: 360,
//   backgroundColor: "skyblue",
//   borderRadius: "50%",
// });

// gsap.from(".box", {

//   duration: 5,
//   delay: 1,
// });
