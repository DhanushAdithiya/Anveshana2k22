let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".red", 3, { y: -600 })
  .to(".graphic", 3, { y: 50 }, "-=3")
  .to(".yellow", 2, { y: -600 }, "-=3")
  .fromTo(".bg", 3, { y: -50 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 5.5, { top: "0%" }, "-=3");

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "200%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
