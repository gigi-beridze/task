let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');
let scrollDiv = document.getElementById('scroll-down-animation')

window.addEventListener('scroll', function(){
   var value = window.scrollY;
   bg.style.top = value * 0.5 + 'px';
   moon.style.left = -value * 0.5 + 'px';
   mountain.style.top = -value * 0.15 + 'px';
   road.style.top = value * 0.15 + 'px';
   text.style.top = value * 1 + 'px';
   scrollDiv.style.display = 'none'
    if(value == 0) {
        scrollDiv.style.display = 'block'
    }
});

document.getElementById("open-popup-btn-1").addEventListener("click",function(){
    document.getElementById("popup-1").classList.add("active");
    document.getElementById("answers").style.display = "block"
  });
   
  document.getElementById("dismiss-popup-btn-1").addEventListener("click",function(){
    document.getElementById("popup-1").classList.remove("active");
    document.getElementById("answers").style.display = "none"
  });
  
  document.getElementById("open-popup-btn-2").addEventListener("click",function(){
    document.getElementById("popup-2").classList.add("active");
    document.getElementById("answers").style.display = "block"

  });
   
  document.getElementById("dismiss-popup-btn-2").addEventListener("click",function(){
    document.getElementById("popup-2").classList.remove("active");
    document.getElementById("answers").style.display = "none"
  });

  document.getElementById("open-popup-btn-3").addEventListener("click",function(){
    document.getElementById("popup-3").classList.add("active");
    document.getElementById("answers").style.display = "block"
  });
   
  document.getElementById("dismiss-popup-btn-3").addEventListener("click",function(){
    document.getElementById("popup-3").classList.remove("active");
    document.getElementById("answers").style.display = "none"
  });
  
  document.getElementById("open-popup-btn-4").addEventListener("click",function(){
    document.getElementById("popup-4").classList.add("active");
    document.getElementById("answers").style.display = "block"
  });
   
  document.getElementById("dismiss-popup-btn-4").addEventListener("click",function(){
    document.getElementById("popup-4").classList.remove("active");
    document.getElementById("answers").style.display = "none"
  });
  document.getElementById("open-popup-btn-5").addEventListener("click",function(){
    document.getElementById("popup-5").classList.add("active");
    document.getElementById("answers").style.display = "block"
  });
   
  document.getElementById("dismiss-popup-btn-5").addEventListener("click",function(){
    document.getElementById("popup-5").classList.remove("active");
    document.getElementById("answers").style.display = "none"
  });
  
  document.getElementById("open-popup-btn-6").addEventListener("click",function(){
    document.getElementById("popup-6").classList.add("active");
    document.getElementById("answers").style.display = "block"
  });
   
  document.getElementById("dismiss-popup-btn-6").addEventListener("click",function(){
    document.getElementById("popup-6").classList.remove("active");
    document.getElementById("answers").style.display = "none"
  });