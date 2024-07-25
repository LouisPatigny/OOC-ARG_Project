document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById('main-video');
    const volumeControl = document.getElementById('volume-control');
    const playButton = document.getElementById('play-button');
    const screamerModal = document.getElementById('screamer-modal');

    // Hide default controls
    videoPlayer.controls = false;

    // Play video when play button is clicked
    playButton.addEventListener('click', function() {
        videoPlayer.play();
        playButton.classList.add('hidden');

        // Set timeout to show screamer at 20,5 seconds
        setTimeout(function() {
            showScreamer();
        }, 20500);
    });

    // Custom volume control
    volumeControl.addEventListener('input', function() {
        videoPlayer.volume = this.value;
    });

    // Redirect to desktop page when video ends
    videoPlayer.addEventListener('ended', function() {
        window.location.href = './desktop.html'; // Redirect to desktop page
    });

    // Remove play button if video ends or is paused
    videoPlayer.addEventListener('ended', function() {
        playButton.classList.remove('hidden');
    });

    videoPlayer.addEventListener('pause', function() {
        playButton.classList.remove('hidden');
    });

    const videoListItems = document.querySelectorAll('.video-list li');
    videoListItems.forEach(item => {
        item.addEventListener('click', function() {
            videoPlayer.src = this.getAttribute('data-video');
            videoPlayer.play();
            playButton.classList.add('hidden');
        });
    });

    function showScreamer() {
        screamerModal.style.display = 'flex';
        setTimeout(function() {
            screamerModal.style.display = 'none';
        }, 4000); // Show for 4 seconds
    }
});
