/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//image loading blur 

  document.addEventListener('DOMContentLoaded', function() {
    var blurBackground = document.getElementById('blurBackground');
    var wrapper = document.getElementById('wrapper');
  
    var img = new Image();
    img.onload = function() {
      blurBackground.style.backgroundImage = 'url(./img/academic.jpg)';
      wrapper.style.boxShadow = 'inset 0 0 0 1000px rgba(0, 0, 0, 0)';
      blurBackground.style.transition = 'filter 1s'; // Added transition property
      setTimeout(function() {
        blurBackground.style.filter = 'blur(0)';
      }, 100);
    }
    img.src = './img/academic.jpg';
  });


//scroll in about page

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

  
  

  
  
  
  
  
  



  