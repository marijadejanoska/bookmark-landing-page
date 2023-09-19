gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });
});


// ScrollTrigger.create({
//   snap: 1 / 4 
// });
