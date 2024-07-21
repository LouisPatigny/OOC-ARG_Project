const IMAGE = document.getElementById("ascension-img")
const INPUT_POP_UP = document.getElementById("input-pop-up");
const CLOSE_POP_UP_BUTTON = document.getElementById("close-pop-up-button");
const ENIGMA_POP_UP_WINDOW = document.getElementById("enigma-pop-up-window");
const HINT_LEFT = document.getElementById("hint-left");
const HINT_RIGHT = document.getElementById("hint-right");
const HINT_CENTER = document.getElementById("hint-center");

INPUT_POP_UP.addEventListener("input", function() {
    const ANSWER = INPUT_POP_UP.value.toLowerCase();
    if (ANSWER === "blood") {
        INPUT_POP_UP.readOnly = true; //Lock the input when correct
        CLOSE_POP_UP_BUTTON.disabled = true; // Disable the close button
        CLOSE_POP_UP_BUTTON.pointerEvents = "none" // Disable the hovering on button once button is disabled
        setTimeout(function() {
            INPUT_POP_UP.value = "";
            setTimeout(function() {
                        INPUT_POP_UP.classList.add("hidden");
                        CLOSE_POP_UP_BUTTON.classList.add("hidden");
                        ENIGMA_POP_UP_WINDOW.classList.add("hidden");
                        HINT_LEFT.classList.add("vanish");
                        HINT_RIGHT.classList.add("vanish");
                        HINT_CENTER.classList.add("vanish");
                        setTimeout(function() {
                            window.location.href = './desktop.html';
                        }, 8000); // Short timeout after hiding the input window before redirecting
            }, 1000); // Adjust delay before clearing the input field
            setTimeout(function() {
                IMAGE.classList.add('ascension-moving');
            }, 4000); // Delay before the zoom happens
        }, 1000); // Adjust delay before clearing the input field
    } else {
        // DO NOTHING
    }
});