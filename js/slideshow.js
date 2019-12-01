//Slideshow variables:
var slideIndex = 0; 
var slides = document.getElementsByClassName("slide"); //grabs all the slides
var dots = document.getElementsByClassName("dot"); //grabs the dots in the slideshow

//Modal variables:
var modal = document.getElementById("modal"); //grabs the div for the modal
var modalImg = document.getElementById("modalImg"); //grabs the img tag for the modal
//grabs the projectSettings div to hide so it doesn't show up on top of the images
var settings = document.getElementById("projectSettings"); 
//grabs the backX button to hide so there aren't two clickable 'X'-s that might confuse users
var backX = document.getElementById("backX");
var imgLink = document.getElementById("imgLink"); //grabs the anchor tag for the image
var closeX = document.getElementById("close"); //grabs the close 'X' for the modal

activateSlideshow(slideIndex);

function changeSlide(n) {
    activateSlideshow(slideIndex += n);
}

function currentSlide(n){
    activateSlideshow(slideIndex = n);
}

function activateSlideshow(n) {
    var i;
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("activeDot");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("activeDot");

    slides[slideIndex].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        imgLink.href = this.src;
        settings.style.visibility = 'hidden';
        backX.style.visibility = 'hidden';
    } 
}

closeX.onclick = function() { 
    modal.style.display = "none";
    settings.style.visibility = 'visible';
    captionText.style.visibility = 'hidden';
    backX.style.visibility = 'visible';
}