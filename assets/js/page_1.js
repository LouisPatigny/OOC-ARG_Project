const INPUT_POP_UP = document.getElementById("input-pop-up");
const CLOSE_POP_UP_BUTTON = document.getElementById("close-pop-up-button");
const ENIGMA_POP_UP_WINDOW = document.getElementById("enigma-pop-up-window");

INPUT_POP_UP.addEventListener("input", function() {
    const ANSWER = INPUT_POP_UP.value.toLowerCase();
    if (ANSWER === "hiddeninthedark") {
        INPUT_POP_UP.readOnly = true; //Lock the input when correct
        CLOSE_POP_UP_BUTTON.disabled = true; // Disable the close button
        CLOSE_POP_UP_BUTTON.pointerEvents = false // Disable the hovering on button once button is disabled
        setTimeout(function() {
            INPUT_POP_UP.value = "";
            setTimeout(function() {
                typeText(INPUT_POP_UP, "welcome back brother...", function() {
                    setTimeout(function() {
                        INPUT_POP_UP.classList.add("hidden");
                        CLOSE_POP_UP_BUTTON.classList.add("hidden");
                        ENIGMA_POP_UP_WINDOW.classList.add("hidden");
                        setTimeout(function() {
                            window.location.href = './desktop.html';
                        }, 500); // Short timeout after hiding the input window before redirecting
                    }, 2000); // Display the message for 2 seconds before hiding the input window
                });
            }, 1000); // Adjust delay before starting to type
        }, 1000); // Adjust delay before clearing the input field
    } else {
        // DO NOTHING
    }
});
