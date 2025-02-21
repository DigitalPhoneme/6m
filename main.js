document.getElementById("gift-container").addEventListener("click", function() {
    let gift = document.getElementById("gift");

    // Change gift image
    gift.src = "src/gift-open.gif"; 

    setTimeout(() => {
        // Hide all previous content
        document.querySelector("h1").style.display = "none";
        document.getElementById("gift-container").style.display = "none";
        document.querySelector("h3").style.display = "none";

        // Show the hidden content
        let hiddenContent = document.getElementById("hidden-content");
        hiddenContent.style.display = "block";

        // Play music
        let music = document.getElementById("music");
        music.play();

        // Add event listener to toggle music on screen tap/click
        document.body.addEventListener("click", function toggleMusic() {
            if (music.paused) {
                music.play();
            } else {
                music.pause();
            }
        });
    }, 2000); // Wait for the gift animation before transitioning
});
