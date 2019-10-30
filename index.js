
document.addEventListener('click', function(e) {
  
  
    // If it isn't an anchor element, don't even bother...
    if (e.target.tagName !== 'A') return;
    
    if ((e.target.href && e.target.href.indexOf('#') != -1) && ((e.target.pathname == location.pathname) || ('/' + e.target.pathname == location.pathname)) && (e.target.search == location.search)) {
      
   /** 
   * If everything checks out, 
   * pass the click event and the event target
   * on through to the scrollAnchors function.
   */ 
              scrollAnchors(e, e.target);
      
    }
    
    
  /** 
  *
  * If you want to target links that have the scroll class, just uncomment the code below (after 
  * commenting out the code above, of course! =D ): 
  *
  */
    
  //   if (e.target.tagName !== 'A') return; 
    
  //   if (e.target.className.contains('.scroll')) {
      
  //      scrollAnchors(e, e.target);
      
  //   }
    
  });
  
              
              function scrollAnchors(e, respond = null) {
                  // const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
          
          function distanceToTop(el) { 
            return Math.floor(el.getBoundingClientRect().top); 
          }
          
                  e.preventDefault();
                  var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
              var targetAnchor = document.querySelector(targetID);
                  if (!targetAnchor) return;
                  var originalTop = distanceToTop(targetAnchor);
                  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
                  var checkIfDone = setInterval(function() {
                      var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
                      if (distanceToTop(targetAnchor) === 0 || atBottom) {
                          targetAnchor.tabIndex = '-1';
                          targetAnchor.focus();
              
             // Let's make sure the History API even exists first..
              if ('history' in window) {
                
                              window.history.pushState('', '', targetID);
                
                } else {
                  // Do it the old-fashioned way!
                  window.location = targetID;
                  
                }
             
                          clearInterval(checkIfDone);
                      }
                  }, 100);
              }
















// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }