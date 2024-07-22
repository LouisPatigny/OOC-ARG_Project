document.addEventListener("DOMContentLoaded", function() {
    const images = [
        {
            src: "./assets/images/audio_imgs/Baphomet.jpg",
            title: "Father Obsidian"
        },
        {
            src: "./assets/images/audio_imgs/Father.png",
            title: "Ritual"
        },
        {
            src: "./assets/images/sample3.jpg",
            title: "Ancient Symbols"
        }
    ];

    let currentIndex = 0;
    const imageElement = document.querySelector(".slider-image");
    const titleElement = document.getElementById("image-title");

    function updateSlider() {
        imageElement.src = images[currentIndex].src;
        titleElement.textContent = images[currentIndex].title;
    }

    document.getElementById("prev-button").addEventListener("click", function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateSlider();
    });

    document.getElementById("next-button").addEventListener("click", function() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateSlider();
    });

    updateSlider(); // Initial call to display the first image
});
