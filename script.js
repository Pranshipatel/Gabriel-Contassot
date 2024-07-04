
function loader(){
  

var tl = gsap.timeline()

tl.to(".text-loader",{
  opacity:1,
  duration:0.11,
  stagger:{
    each:0.22,
    repeat:1,
    yoyo:true,
  }
})
.to(".loader",{
  display:"none"
})
.to(".cntr-p",{
  onStart:function(){
    $(".cntr-p").scramble(4000, 20, "alphabet", true);

  }
},"a")
.to(".cntr-p2",{
  onStart:function(){
    $(".cntr-p2").scramble(4000, 20, "alphabet", true);

  }
},"a")
.to(".cntr-p3",{
  onStart:function(){
    $(".cntr-p3").scramble(4000, 20, "alphabet", true);

  }
},"a")
.to(".info",{
  onStart:function(){
    $(".info").scramble(4000, 20, "alphabet", true);

  }
},"a")
.to(".contact",{
  onStart:function(){
    $(".contact").scramble(4000, 20, "alphabet", true);

  }
},"a")
}

loader();



function content(){
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:"#one",
      pin:true,
      // markers:true,
      start:"50% 50%",
      end:"150% 50%",
      scrub:true
    }
  })
  
  tl2.to(".flex-p-content",{
    scale:0.8
  })
  .to(".one-text",{
    top:"50%"
  })
  

  gsap.timeline({
    scrollTrigger:{
      trigger:"#img-one",
      start:"0% 90%",
      end:"200% 90%",
      scrub:true,
      // markers:true
    }
  })
  .to("#img-one",{
    backgroundSize:"50%",
  
  })
  
  gsap.timeline({
    scrollTrigger:{
      trigger:"#img-two",
      start:"0% 90%",
      end:"200% 90%",
      scrub:true,
      // markers:true
    }
  })
  .to("#img-two",{
    backgroundSize:"50%",
    
  })
  
  
  gsap.timeline({
    scrollTrigger:{
      trigger:"#img-three",
      start:"0% 90%",
      end:"200% 90%",
      scrub:true,
      // markers:true
    }
  })
  .to("#img-three",{
    backgroundSize:"50%",
    
  })
  
  gsap.timeline({
    scrollTrigger:{
      trigger:"#img-four",
      start:"0% 90%",
      end:"200% 90%",
      scrub:true,
      // markers:true
    }
  })
  .to("#img-four",{
    backgroundSize:"50%",
    
  })
  
  gsap.timeline({
    scrollTrigger:{
      trigger:"#img-five",
      start:"0% 90%",
      end:"200% 90%",
      scrub:true,
    }
  })
  .to("#img-five",{
    backgroundSize:"50%",
    
  })
  
  gsap.timeline({
    scrollTrigger:{
      trigger:"#img-six",
      start:"0% 90%",
      end:"200% 90%",
      scrub:true,
    }
  })
  .to("#img-six",{
    backgroundSize:"50%",
    
  })
  
  gsap.timeline({
    scrollTrigger:{
      trigger:"#img-seven",
      start:"0% 90%",
      end:"200% 90%",
      scrub:true,
    }
  })
  .to("#img-seven",{
    backgroundSize:"50%",
    
  })


  gsap.timeline({
    scrollTrigger:{
      trigger:".last",
      start:"0% 90%",
      end:"200% 90%",
      scrub:true,
      // markers:true
    }
  })
  .to(".flex-p-content",{
    scale:1.1
    
  })
  
}
content();


function image(){
  document.querySelector("#img-one").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor = "#dfd2be"
  })
  
  document.querySelector("#img-one").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor = "#000"
  })
  
  document.querySelector("#img-two").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor = "#1a354e"
  })
  
  document.querySelector("#img-two").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor = "#000"
  })
  
  
  document.querySelector("#img-three").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor = "#e02144"
  })
  
  document.querySelector("#img-three").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor = "#000"
  })
  
  
  document.querySelector("#img-four").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor = "#212824"
  })
  
  document.querySelector("#img-four").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor = "#000"
  })
  
  document.querySelector("#img-five").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor = "#873f37"
  })
  
  document.querySelector("#img-five").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor = "#000"
  })
  
  
  document.querySelector("#img-six").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor = "#13133A"
  })
  
  document.querySelector("#img-six").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor = "#000"
  })
  
  document.querySelector("#img-seven").addEventListener("mouseenter",function(){
    document.querySelector("html").style.backgroundColor = "#161D26"
  })
  
  document.querySelector("#img-seven").addEventListener("mouseleave",function(){
    document.querySelector("html").style.backgroundColor = "#000"
  })
  
}
image();