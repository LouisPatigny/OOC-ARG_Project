document.addEventListener("DOMContentLoaded", function() {
    const images = [
        {
            src: "./assets/images/MJ/1.png",
            title: ""
        },
        {
            src: "./assets/images/MJ/2.png",
            title: ""
        },
        {
            src: "./assets/images/MJ/3.png",
            title: ""
        },
        {
            src: "./assets/images/MJ/4.png",
            title: ""
        },
        {
            src: "./assets/images/MJ/5.png",
            title: ""
        },
        {
            src: "./assets/images/MJ/6.png",
            title: ""
        },
        {
            src: "./assets/images/MJ/7.png",
            title: ""
        },
        {
            src: "./assets/images/MJ/8.png",
            title: ""
        },
        {
            src: "./assets/images/MJ/9.png",
            title: ""
        },
        {
            src: "./assets/images/MJ/10.png",
            title: ""
        },
        {
            src: "./assets/images/MJ/11.png",
            title: ""
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
