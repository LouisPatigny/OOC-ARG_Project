document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById('main-video');
    const videoListItems = document.querySelectorAll('.video-list li');

    videoListItems.forEach(item => {
        item.addEventListener('click', function() {
            videoPlayer.src = this.getAttribute('data-video');
            videoPlayer.play();
        });
    });
});
