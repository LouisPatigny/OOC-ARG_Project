// page_4.js

// Redefine typeText to use textContent
function typeText(element, text, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100); // Adjust typing speed here (100 ms per character)
        } else if (callback) {
            callback();
        }
    }
    type();
}

function animateDots(element) {
    const dots = ['', '.', '..', '...'];
    let i = 0;
    function animate() {
        element.textContent = `Access in progress${dots[i]}`;
        i = (i + 1) % dots.length;
        setTimeout(animate, 600); // Adjust speed of the dots animation here (500 ms per dot change)
    }
    animate();
}

function checkSentence() {
    const word1 = document.getElementById('word1').value.trim().toLowerCase();
    const word2 = document.getElementById('word2').value.trim().toLowerCase();
    const word3 = document.getElementById('word3').value.trim().toLowerCase();
    const word4 = document.getElementById('word4').value.trim().toLowerCase();
    const word5 = document.getElementById('word5').value.trim().toLowerCase();
    const word6 = document.getElementById('word6').value.trim().toLowerCase();

    const correctSentence = ["lost", "hope", "pray", "coward", "slaughter", "worms"];

    if (word1 === correctSentence[0] && word2 === correctSentence[1] && word3 === correctSentence[2] &&
        word4 === correctSentence[3] && word5 === correctSentence[4] && word6 === correctSentence[5]) {
        
        // Lock the inputs
        document.querySelectorAll('.fill-the-blanks-text input').forEach(input => {
            input.readOnly = true;
        });

        // Start the vanishing effect
        document.querySelector('.fill-the-blanks-text').classList.add("vanish");
        document.querySelector('.coordinates-left').classList.add("vanish");
        document.querySelector('.coordinates-right').classList.add("vanish");

        // After vanishing, show the new text
        setTimeout(() => {
            document.querySelector('#loading-container').classList.remove('hidden');

            const newTextElement = document.querySelector('.loading-text');
            typeText(newTextElement, 'Access in progress', () => {
                animateDots(newTextElement); // Start the dots animation
                setTimeout(() => {
                    session.set('imagesUnlocked', 'true');
                    window.location.href = './images-folder.html'; // Replace with your new page URL
                }, 5000); // Adjust the delay before redirecting
            });
        }, 3000);
    }
}

document.getElementById("word1").addEventListener("input", checkSentence);
document.getElementById("word2").addEventListener("input", checkSentence);
document.getElementById("word3").addEventListener("input", checkSentence);
document.getElementById("word4").addEventListener("input", checkSentence);
document.getElementById("word5").addEventListener("input", checkSentence);
document.getElementById("word6").addEventListener("input", checkSentence);
