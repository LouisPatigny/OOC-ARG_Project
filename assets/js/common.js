function typeText(element, text, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.value += text.charAt(i);
            i++;
            setTimeout(type, 100); // Adjust typing speed here (100 ms per character)
        } else if (callback) {
            callback();
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", function() {
    // Manage session state
    const session = {
        get: function(key) {
            return sessionStorage.getItem(key);
        },
        set: function(key, value) {
            sessionStorage.setItem(key, value);
        },
        remove: function(key) {
            sessionStorage.removeItem(key);
        },
        clear: function() {
            sessionStorage.clear();
        }
    };

    window.session = session;

    // Add "Go back to desktop" button functionality
    const backButton = document.getElementById("back-button");
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = './desktop.html';
        });
    }

    /*Main Menu*/
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            let menu = document.getElementById('menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }
    });

    document.getElementById('resume').addEventListener('click', function() {
        document.getElementById('menu').classList.add('hidden');
    });

    document.getElementById('quit').addEventListener('click', function() {
        window.location.href = './index.html'; // Redirect to main page
        document.getElementById('menu').classList.add('hidden');
    });

    // Event listener to open the input pop-up
    const invisibleButton = document.getElementById('invisible-button');
    if (invisibleButton) {
        invisibleButton.addEventListener('click', function() {
            const INPUT_POP_UP = document.getElementById('input-pop-up');
            const CLOSE_POP_UP_BUTTON = document.getElementById('close-pop-up-button');
            const ENIGMA_POP_UP_WINDOW = document.getElementById("enigma-pop-up-window");
            INPUT_POP_UP.classList.remove('hidden');
            CLOSE_POP_UP_BUTTON.classList.remove('hidden');
            ENIGMA_POP_UP_WINDOW.classList.remove('hidden');
            INPUT_POP_UP.value = ""; // Clear the input field
        });
    }

    // Event listener to close the input pop-up
    const closeButton = document.getElementById('close-pop-up-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            document.getElementById('input-pop-up').classList.add('hidden');
            document.getElementById('close-pop-up-button').classList.add('hidden');
            document.getElementById("enigma-pop-up-window").classList.add('hidden');
        });
    }
});