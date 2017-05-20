var bg = document.querySelector('section#hero div.content')


function scrollHandler(){
  bg.style.transform =  "translate3d(0px, " + ((window.pageYOffset/10)) + "px, 0px)";
}

window.addEventListener('scroll',function(){
  window.requestAnimationFrame(scrollHandler);
})




document.querySelectorAll('article.sell aside').forEach(function(e){

  function scrollHandler(){
    e.style.transform =  "translate3d(0px, " + ((window.pageYOffset/10)-100) + "px, 0px)";
  }

  window.addEventListener('scroll',function(){
    window.requestAnimationFrame(scrollHandler);
  })



})
