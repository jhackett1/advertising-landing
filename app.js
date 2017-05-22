// Helper function to find strength of parallax as a decimal between -1 and 1 based on distance of object from center of screen
function parallaxStrength(element){
  // Gather values
  var viewportHeight = document.documentElement.clientHeight;
  var currentPos = element.getBoundingClientRect().top;
  var elementHeight = element.clientHeight;
  // Calculate strength IF element is in viewport
  if ((currentPos + elementHeight) < 0) {
    return strength;
  } else if(currentPos > viewportHeight) {
    return strength;
  } else {
    var strength = (((currentPos + elementHeight/2) - viewportHeight/2) / viewportHeight)*2;
    return strength;
  }
}

// Make the pointer SVG clickable
document.getElementById('arrows').addEventListener('click', function(){
  document.querySelector('#sells').scrollIntoView({block: 'end',  behaviour: 'smooth'});
})

// Scroll event handler
window.addEventListener('scroll', function(event){

  // Keep track of the current scroll position of the page
  var scrollPos = window.pageYOffset;

  // Animate the hero section when it is in view
  if (document.querySelector('section#hero').getBoundingClientRect().bottom > 0) {
    // Change the shape of the hero container
    document.getElementById('slice').style.height = scrollPos/6 + "px";
    // Hide/show the arrow icon with scroll
    document.getElementById('arrows').style.opacity = 1-(Math.min(1, scrollPos/40));
    // Hide/show the arrow icon with scroll
    document.querySelector('section#hero div.content').style.opacity = 1-(Math.min(1, scrollPos/400));
    // Differential scroll rate on title
    document.querySelector('section#hero h1').style.transform = "translate3d(0px, -" + scrollPos/4+ "px , 0px)";
    // Differential scroll rate on title
    document.querySelector('section#hero h2').style.transform = "translate3d(0px, -" + scrollPos/5+ "px , 0px)";
  }

  function animateTiles(element){
      element.querySelectorAll('ul.slide li').forEach(function(element, i){
        setTimeout(function(){
          if (element.classList != ' visible') {
            element.classList += ' visible';
          }
        }, i*150)
      })
  }
  document.querySelectorAll('ul.slider').forEach(function(element){
    // If the container is scrolling into view, do things
    if ((scrollPos+(document.documentElement.clientHeight*0.75)) > (element.getBoundingClientRect().top+scrollPos)) {
      console.log('aha')
      animateTiles(element);
    }
  });

  // Handle icon animation transitions
  document.querySelectorAll('.icons').forEach(function(element){
    // If the container is scrolling into view, do things
    if ((scrollPos+(document.documentElement.clientHeight*0.75)) > (element.getBoundingClientRect().top+scrollPos)) {
      element.querySelectorAll('.icon').forEach(function(element, i){
        setTimeout(function(){
          if (element.classList != 'icon visible') {
            element.classList += ' visible';
          }
        }, i*150)
      })
    }
  });

  // Handle phone screen transition
  var screen = document.querySelector('.parallaxing');
  screen.style.transform = 'translate3d(' + Math.max(0, ((300*parallaxStrength(screen))+100)) + 'px, 0px, 0px)';
  // Handle phone screen transition
  document.querySelectorAll('.cut').forEach(function(cut){
    cut.style.height = (60-(60*parallaxStrength(cut)))/2 + "px";
  });
  // Handle CTA
  var packages = document.querySelector('section#cta h2');
  packages.style.opacity = (1-parallaxStrength(packages))+0.25;

})

// THE SLIDER/TAB THING
// -------------------------------------------------------------------

// First, grab all labels and record their index
document.querySelectorAll('ul.labels li').forEach(function(element,index){
  // When a label is clicked
  element.addEventListener('click', function(){
    // Update labels
    var labels = document.querySelectorAll('ul.labels li')
    labels.forEach(function(elementb){
      elementb.classList = '';
    });
    labels[index].classList += 'current';

    // Hide all slides
    var slides = document.querySelectorAll('ul.slider ul.slide');
    slides.forEach(function(elementa){
      elementa.classList = 'slide';
    });
    // Show desired slide
    slides[index].classList += ' selected';
  })
})
