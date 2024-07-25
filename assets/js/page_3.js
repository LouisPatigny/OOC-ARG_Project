const INPUT_POP_UP = document.getElementById("input-pop-up");
const CLOSE_POP_UP_BUTTON = document.getElementById("close-pop-up-button");
const ENIGMA_POP_UP_WINDOW = document.getElementById("enigma-pop-up-window");

document.addEventListener("DOMContentLoaded", function() {
    // Chapter navigation
    document.getElementById('chapter-select').addEventListener('change', function() {
        const chapter = this.value;
        const chapterElement = document.querySelector(`#${chapter}`);
        if (chapterElement) {
            chapterElement.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Password input handling
    document.getElementById('input-pop-up').addEventListener('input', function() {
        const ANSWER = INPUT_POP_UP.value.toLowerCase()
        if (ANSWER === "we shall live for god") {
            INPUT_POP_UP.readOnly = true; //Lock the input when correct
            CLOSE_POP_UP_BUTTON.disabled = true; // Disable the close button
            CLOSE_POP_UP_BUTTON.pointerEvents = false // Disable the hovering on button once button is disabled
            setTimeout(function() {
                INPUT_POP_UP.value = "";
                setTimeout(function() {
                    typeText(INPUT_POP_UP, "fortune smiles at the Order", function() {
                        setTimeout(function() {
                            INPUT_POP_UP.classList.add("hidden");
                            CLOSE_POP_UP_BUTTON.classList.add("hidden");
                            ENIGMA_POP_UP_WINDOW.classList.add('hidden');
                            setTimeout(function() {
                                session.set('audioUnlocked', 'true');
                                window.location.href = './audio-folder.html';
                            }, 500); // Short timeout after hiding the input window before redirecting
                        }, 2000); // Display the message for 2 seconds before hiding the input window
                    });
                }, 1000); // Adjust delay before starting to type
            }, 1000); // Adjust delay before clearing the input field
        } else {
            // DO NOTHING
        }
    });

    // Event listener to open the input pop-up for password-button
    document.getElementById('password-button').addEventListener('click', function() {
        const INPUT_POP_UP = document.getElementById('input-pop-up');
        const CLOSE_POP_UP_BUTTON = document.getElementById('close-pop-up-button');
        const ENIGMA_POP_UP_WINDOW = document.getElementById("enigma-pop-up-window");
        INPUT_POP_UP.classList.remove('hidden');
        CLOSE_POP_UP_BUTTON.classList.remove('hidden');
        ENIGMA_POP_UP_WINDOW.classList.remove('hidden');
        INPUT_POP_UP.value = ""; // Clear the input field
    });

    // Event listener to close the input pop-up
    document.getElementById('close-pop-up-button').addEventListener('click', function() {
        document.getElementById('input-pop-up').classList.add('hidden');
        document.getElementById('close-pop-up-button').classList.add('hidden');
        document.getElementById("enigma-pop-up-window").classList.add('hidden');
    });
    
    //Scroll-back to top button
    const scrollToTopButton = document.getElementById('scroll-to-top');
    // Show the button when the user scrolls down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { // Show the button after scrolling 100px
            scrollToTopButton.classList.remove('hidden');
        } else {
            scrollToTopButton.classList.add('hidden');
        }
    });

    // Scroll to top functionality
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
