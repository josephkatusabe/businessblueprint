// Get the modal element
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById('modal-btn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};


let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function startSlider() {
    setInterval(nextSlide, 3000); //change slide every 3 seconds
}

startSlider(); //Start the slideshow automatically.
