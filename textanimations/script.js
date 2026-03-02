gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

function breakText() {
  let h1 = document.querySelector("#h1");
  let h1Splitted = h1.textContent.split("");
  half = h1Splitted.length / 2;
  let h1arr = "";
  h1Splitted.forEach((e, idx) => {
    if (idx < half) h1arr += `<span class="a"> ${e} </span>`;
    else h1arr += `<span class="b"> ${e} </span>`;
  });
  h1.innerHTML = h1arr;
}
breakText();

gsap.from("#h1 .a", {
  x: 500,
  duration: 2,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
  scrollTrigger: {
    trigger: "#h1",
    start: "top 0%",
    toggleActions: "play none none reverse",
  },
});

gsap.from("#h1 .b", {
  x: -500,
  duration: 2,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
  scrollTrigger: {
    trigger: "#h1",
    start: "top 0%",
    toggleActions: "play none none reverse",
  },
});

function breakTextAgain() {
  let h2 = document.querySelector("#h2");
  let h1Splitted = h2.textContent.split("");
  half = h1Splitted.length / 2;
  let h1arr = "";
  h1Splitted.forEach((e, idx) => {
    if (idx < half) h1arr += `<span class="a"> ${e} </span>`;
    else h1arr += `<span class="b"> ${e} </span>`;
  });
  h2.innerHTML = h1arr;
}
breakTextAgain();

gsap.from("#h2 .a", {
  y: 500,
  duration: 1.5,
  stagger: 0.15,
  opacity: 0,
  scrollTrigger: {
    trigger: "#h2",
    start: "top 10%",
    toggleActions: "play none none reverse",
  },
});

gsap.from("#h2 .b", {
  y: -500,
  duration: 1.5,
  stagger: -0.15,
  opacity: 0,
  scrollTrigger: {
    trigger: "#h2",
    start: "top 10%",
    toggleActions: "play none none reverse",
  },
});

let splitH3 = new SplitText("#h3", {
  type: "lines",
  linesClass: "line-child",
});

let maskSplit = new SplitText("#h3", {
  type: "lines",
  linesClass: "line-parent",
});

gsap.from(splitH3.lines, {
  y: 100,
  opacity: 0,
  rotateX: -45,
  duration: 1.2,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#h3",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
});
