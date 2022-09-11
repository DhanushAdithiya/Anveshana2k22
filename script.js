let controller = new ScrollMagic.Controller();
let controller2 = new ScrollMagic.Controller()
let contentController = new ScrollMagic.Controller()
let timeline = new TimelineMax()
let scrollDownTxt = new TimelineMax();
let fadeTxt = new TimelineMax()
let contentFade = new TimelineMax()


timeline
  // .fromTo('.scroll-text', {opacity: 1}, {opacity:0, duration:1})
  .to('.par-mount', 3, {y:-600},)
  .to('.par-rock',3, {y:-500},'-=3')
  .to('.par-back',3,{y:100},'-=3')
  .to('.par-bg',3,{y:-300},'-=3')
  .to('.reg',3,{y:-600},'-=3')
  .to('.scroll-text',3,{y:-900},'-=3')
  // .to(".about-page", 3, { top: "0%" }, "-=3")

 ; 

// timeline
//  .fromTo(".about-content", { opacity: 0 }, { opacity: 1, duration: 3 });


fadeTxt
   .fromTo('.reg', {opacity: 1}, {opacity:0, duration:1})

  
scrollDownTxt
  .fromTo('.scroll-text', {opacity: 0}, {opacity:1, duration:3})

;



// contentFade
//   .fromTo(".about-content", { opacity: 0 }, { opacity: 1, duration:3});
//   // .fromTo('.scroll-text', {opacity: 1}, {opacity:0, duration:1})


let scene = new ScrollMagic.Scene({
  triggerElement: "container",
  duration: "200%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("container")
  .addTo(controller);

let scene2 = new ScrollMagic.Scene({
  triggerElement: "scroll-text",
  duration: "200%",
  triggerHook: 0,
})
  .setTween(fadeTxt)
  .setPin("scroll-text")
  .addTo(controller2);


let scene3 = new ScrollMagic.Scene({
  triggerElement: "fade-trig",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(contentFade)
  .setPin('about-content')
  .addTo(contentController)