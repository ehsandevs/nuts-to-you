jQuery(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });
    $('#top-header-slides').owlCarousel({
        loop: true,
        dots: true,
        rtl: true,
        autoplay: true,
        nav: false,
        arrow: true,
        dotsClass: 'mycss',
        responsiveClass: true,
        responsive: {
            0: {
                loop: true,
                items: 1,
                nav: false,

            },
            600: {
                loop: true,
                items: 2,
                nav: false
            },
            1000: {
                loop: true,
                items: 3,
                nav: false,


            }
        }
    })
    $('#last-product-slides').owlCarousel({
        loop: true,
        dots: true,
        rtl: true,
        autoplay: true,
        nav: false,
        arrow: true,
        responsiveClass: true,
        responsive: {
            0: {
                loop: true,
                items: 1,
                nav: false,

            },
            600: {
                loop: true,
                items: 1,
                nav: false
            },
            1000: {
                loop: true,
                items: 4,
                nav: false,


            }
        }
    })

    $('#last-blog-slides').owlCarousel({
        loop: true,
        dots: true,
        rtl: true,
        autoplay: true,
        nav: false,
        arrow: true,
        responsiveClass: true,
        responsive: {
            0: {
                loop: true,
                items: 1,
                nav: false,

            },
            600: {
                loop: true,
                items: 1,
                nav: false
            },
            1000: {
                loop: true,
                items: 4,
                nav: false,


            }
        }
    })

    $('#last-product-slides').owlCarousel({
        loop: true,
        dots: true,
        rtl: true,
        autoplay: true,
        nav: false,
        arrow: true,
        responsiveClass: true,
        responsive: {
            0: {
                loop: true,
                items: 1,
                nav: false,

            },
            600: {
                loop: true,
                items: 1,
                nav: false
            },
            1000: {
                loop: true,
                items: 4,
                nav: false,


            }
        }
    })

    $('#blog-sidebar-slider').owlCarousel({
        loop: true,
        dots: true,
        rtl: true,
        autoplay: true,
        nav: false,
        arrow: true,
        responsiveClass: true,
        responsive: {
            0: {
                loop: true,
                items: 1,
                nav: false,

            },
            600: {
                loop: true,
                items: 1,
                nav: false
            },
            1000: {
                loop: true,
                items: 1,
                nav: false,


            }
        }
    })

    $('#reviews-about').owlCarousel({
        loop: true,
        dots: true,
        rtl: true,
        autoplay: true,
        nav: false,
        arrow: true,
        responsiveClass: true,
        responsive: {
            0: {
                loop: true,
                items: 1,
                nav: false,

            },
            600: {
                loop: true,
                items: 1,
                nav: false
            },
            1000: {
                loop: true,
                items: 1,
                nav: false,


            }
        }
    });
    $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }
    
});
function openNav() {
    document.getElementById("mySidepanel").style.width = "350px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
// slider main
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); 
}


