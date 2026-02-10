/*document.addEventListener('DOMContentLoaded', () => {
    const frames = document.querySelectorAll('.frame');
    const overlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');
    const mediaOverlay = document.getElementById('mediaOverlay');
    const overlayVideo = document.getElementById('overlayVideo');



    const closeBtn = document.getElementById('closeOverlay');
    const videoCloseBtn = document.getElementById('closeOverlay');

    frames.forEach(frame => {
        // Prevent right-click on original images
        frame.addEventListener('contextmenu', e => e.preventDefault());

        // Prevent dragging
        frame.setAttribute('draggable', false);

        // Open overlay on click
        frame.addEventListener('click', () => {
            overlay.style.display = 'flex';
            overlayImage.src = frame.src;
           
            
        });
    });

    // Prevent right-click and dragging on the zoomed overlay image
    overlayImage.addEventListener('contextmenu', e => e.preventDefault());
    overlayImage.setAttribute('draggable', false);
    

    // Close overlay on X button click
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayImage.src = '';
    });

    // Close overlay if clicking outside the image
    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            overlayImage.src = '';
        }
    });




    
    // Close video overlay
    videoCloseBtn.addEventListener('click', () => {
        mediaOverlay.style.display = 'none';
        overlayVideo.pause();
        overlayVideo.src = '';
    });

    // Clicking outside overlay closes them
    imageOverlay.addEventListener('click', e => {
        if (e.target === imageOverlay) {
            imageOverlay.style.display = 'none';
            overlayImage.src = '';
        }
    });

    mediaOverlay.addEventListener('click', e => {
        if (e.target === mediaOverlay) {
            mediaOverlay.style.display = 'none';
            overlayVideo.pause();
            overlayVideo.src = '';
        }
    });

    // Optional: Pause all frame videos when overlay video plays
    overlayVideo.addEventListener('play', () => {
        frames.forEach(frame => {
            if (frame.tagName.toLowerCase() === 'video') frame.pause();
        });
    });
});
*/

document.addEventListener('DOMContentLoaded', () => {
    const frames = document.querySelectorAll('.frame');
    const overlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');
    const closeBtn = document.getElementById('closeOverlay');

    document.querySelectorAll('video').forEach(video => {
    video.addEventListener('contextmenu', e => {
        e.preventDefault();

        document.querySelectorAll('video').forEach(video => {
    video.setAttribute('draggable', false);
});

    });
});


    frames.forEach(frame => {

        // ===== IMAGES ONLY =====
        if (frame.tagName === 'IMG') {

            // Block right-click
            frame.addEventListener('contextmenu', e => e.preventDefault());

            // Prevent drag
            frame.setAttribute('draggable', false);

            // Click → open image overlay
            frame.addEventListener('click', () => {
                overlay.style.display = 'flex';
                overlayImage.src = frame.src;
                document.body.classList.add('no-scroll');
            });
        }

        // ===== VIDEOS =====
        if (frame.tagName === 'VIDEO') {
            // ❌ Do NOTHING — let native controls handle zoom/fullscreen
            frame.style.cursor = 'default';
        }
    });

    // ===== Overlay image protection =====
    overlayImage.addEventListener('contextmenu', e => e.preventDefault());
    overlayImage.setAttribute('draggable', false);

    // ===== Close overlay ONLY via X button =====
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayImage.src = '';
        document.body.classList.remove('no-scroll');
    });
});


