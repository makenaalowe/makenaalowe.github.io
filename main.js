document.querySelector("#text-0").addEventListener("mouseenter", function() {
    document.querySelector("#text-1").style.visibility = "visible";
    alert("ha ha ha");
});
document.querySelector("#text-1").addEventListener("mouseenter", function() {
    document.querySelector("#text-2").style.visibility = "visible";
});
document.querySelector("#text-2").addEventListener("mouseenter", function() {
    document.querySelector("#text-3").style.visibility = "visible";
});
document.querySelector("#text-3").addEventListener("mouseenter", function() {
    document.querySelector("#text-4").style.visibility = "visible";
});
document.querySelector("#text-4").addEventListener("mouseenter", function() {
    document.querySelector("#text-5").style.visibility = "visible";
});
document.querySelector("#text-5").addEventListener("mouseenter", function() {
    document.querySelector("#text-6").style.visibility = "visible";
});

document.querySelector("#text-6").addEventListener("mouseenter", function() {
    document.querySelector("#text-7").style.visibility = "visible";
});

document.querySelector("#text-7").addEventListener("mouseenter", function() {
    document.querySelector("#text-8").style.visibility = "visible";
});

document.querySelector("#text-8").addEventListener("mouseenter", function() {
    document.querySelector("#text-9").style.visibility = "visible";
});

document.querySelector("#text-9").addEventListener("mouseenter", function() {
    document.querySelector("#text-10").style.visibility = "visible";
});

document.querySelector("#text-10").addEventListener("mouseenter", function() {
    document.querySelector("#text-11").style.visibility = "visible";
});

document.querySelector("#text-11").addEventListener("mouseenter", function() {
    document.querySelector("#text-12").style.visibility = "visible";
});

document.querySelector("#text-12").addEventListener("mouseenter", function() {
    document.querySelector("#text-13").style.visibility = "visible";
});

document.querySelector("#text-13").addEventListener("mouseenter", function() {
    document.querySelector("#text-14").style.visibility = "visible";
});

document.querySelector("#text-14").addEventListener("mouseenter", function() {
    document.querySelector("#text-15").style.visibility = "visible";
});

//For handling texts (if you have texts-related functionality)
let textDivs = Array.from(document.querySelectorAll(".word-div"));

// Set initial visibility of texts divs to hidden
textDivs.forEach(div => div.style.visibility = "hidden");

// Function to show the next texts
let currentTextIndex = 0;

function showNextText() {
    if (currentTextIndex < textDivs.length) {
        textDivs[currentTextIndex].style.visibility = "visible";
        currentTextIndex++;
    }
}

// Add an event listener to the body to detect hover for texts
document.body.addEventListener("mouseover", showNextText);

// Add click event listeners to show the next text
textDivs.forEach((currentDiv, index) => {
    if (index < textDivs.length - 1) {
        currentDiv.addEventListener('click', () => {
            textDivs[index + 1].style.visibility = "visible";
        });
    }
});

// Add mouse enter event listeners to show the next text
textDivs.forEach((currentDiv, index) => {
    currentDiv.addEventListener("mouseenter", () => {
        if (index < textDivs.length - 1) {
            textDivs[index + 1].style.visibility = "visible";
        }
    });
});


















