document.addEventListener("DOMContentLoaded", function() {
    // Elements
    const icons = document.querySelectorAll('.icon, .folder');
    const taskbarItems = document.getElementById('taskbar-items');
    const clockElement = document.getElementById('clock').querySelector('p');

    // Function to update the clock
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        clockElement.textContent = hours + ':' + minutes + ' ' + ampm;
    }

    // Update clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call to set the clock immediately

    // Function to create a new window (this example is kept simple for now)
    function createWindow(id, label) {
        const windowElement = document.createElement('div');
        windowElement.className = 'window';
        windowElement.id = `window-${id}`;
        windowElement.innerHTML = `
            <div class="window-header">
                <p>${label}</p>
                <button class="close-button">X</button>
            </div>
            <div class="window-content">
                <p>Content of ${label}</p>
            </div>
        `;
        document.body.appendChild(windowElement);

        // Close button functionality
        windowElement.querySelector('.close-button').addEventListener('click', () => {
            windowElement.remove();
        });

        // Add to taskbar
        const taskbarItem = document.createElement('div');
        taskbarItem.className = 'taskbar-item';
        taskbarItem.id = `taskbar-item-${id}`;
        taskbarItem.textContent = label;
        taskbarItem.addEventListener('click', () => {
            document.getElementById(`window-${id}`).style.zIndex = 1000; // Bring to front
        });
        taskbarItems.appendChild(taskbarItem);
    }

    // Add event listeners to icons
    icons.forEach(icon => {
        icon.addEventListener('dblclick', function() {
            const id = this.id;
            let redirectUrl = '';

            // Determine the redirection URL based on the icon/folder ID
            switch (id) {
                case 'icon1':
                    redirectUrl = './page_2.html'; // Example URL
                    break;
                case 'icon2':
                    redirectUrl = './page_4.html'; // Example URL
                    break;
                case 'folder1':
                    redirectUrl = session.get('imagesUnlocked') === 'true' ? './images-folder.html' : './page_4.html';
                    break;
                case 'folder2':
                    redirectUrl = session.get('videosUnlocked') === 'true' ? './videos-folder.html' : './page_2.html';
                    break;
                case 'folder3':
                    redirectUrl = session.get('audioUnlocked') === 'true' ? './audio-folder.html' : './page_3.html';
                    break;
                default:
                    alert('No action defined for this item.');
                    return;
            }

            // Redirect to the determined URL
            window.location.href = redirectUrl;
        });
    });
});
