//Get individual slides (which contain a paragraph, image, paragraph).
const slides = document.querySelectorAll(".slide");
// Get both arrows, left and right. querySelectorAll gives us back a nodelist
const arrows = document.querySelectorAll(".arrows");
// Get all the dots, we get back a node list
const dots = document.querySelectorAll(".dot");
//Set variable idx to number 1.
let idx = 1;

//Weh the document loads run function changeImages, for an initial setup, so tha we have the first image displayed on the screen.
document.addEventListener("DOMContentLoaded", () => {
    changeImages();
});


function changeImages() {
    // First we check if index, represented with variable idx, is bigger than the number of slides in the nodelist "slides".
    // When user has reached last image, it starts from the beginning.
    if (idx > slides.length) idx = 1;
    // Then we check if index number is smaller than the index of the first item in the array [nodelist]
    //When user has reach the first image and clicks again, it goes back to the end.
    if (idx < 1) idx = slides.length;
    // These two array methods reset everything
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"))
    // Here we display the new image, depending on the number of the index 
    slides[idx - 1].style.display = "block";
    //We add the class .fade which contains an animation, defined in css, which use opacity.
    slides[idx - 1].classList.add("fade");
    //We add an active class to the button, corresponding to the image displayed on the screen.
    dots[idx - 1].classList.add("active");
}

//Here we are listenting when the dot element is clicked, and passing on the event data to function getDotIndex
dots.forEach(dot => {
    dot.addEventListener("click", getDotIndex);
})
//Here we are listening for when the arrow was clicked and passing on the event object to function getArrowThatWasClicked.
arrows.forEach(arrow => {
    arrow.addEventListener("click", getArrowThatWasClicked);
})

//Here we check which arrow was clicked and increment or decrement the idx accordingly. And then we call changeImages() function
function getArrowThatWasClicked(ev) {
    if (ev.target.className === "right-arrow arrows") {
        idx += 1;
        changeImages(idx);
    } else {
        idx -= 1;
        changeImages(idx);
    }
}

//Here we get the attribute of the dot element that was clicked, which returns a string number. We convert this string number to a number and assigns it to idx. Then we pass it to changeImages function

function getDotIndex(ev) {
    let index = ev.target.getAttribute("data-index");
    idx = Number(index);
    changeImages(index);
}
