gsap.to("#nav", {
    backgroundColor: "#FFC436",
    duration : 1 ,
    delay : 1
});


const container = document.getElementById("lottie-container");

const animationPath = "/img/animation.json";
const animationOptions = {
  container: container,
  renderer: "svg", 
  loop: true, 
  autoplay: true, 
  path: animationPath,
};


const animation = lottie.loadAnimation(animationOptions);
gsap.from("#lottie-container", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".animation",
    scroller: "body",
    // markers:true,
    start: "top 100%",
    end: "top 65%",
    scrub: 1,
  },
});



gsap.from("#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 80%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#planet1", {
    
    x: -100,
    scrollTrigger: {
      trigger: "#about-us-ani",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#planet2", {
    
    x: 100,
    scrollTrigger: {
      trigger: "#about-us-ani",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });




  gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 90%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#Rcard1", {
    
    x: -70,
    scrollTrigger: {
      trigger: "#review",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#Rcard2", {
   
    x: 70,
    scrollTrigger: {
      trigger: "#review",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });