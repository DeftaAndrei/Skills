document.addEventListener('DOMContentLoaded', function() {
    const aboutButton = document.getElementById('aboutButton');
    const aboutSection = document.getElementById('aboutSection');

    aboutButton.addEventListener('click', function(e) {
        e.preventDefault();
        aboutSection.classList.toggle('hidden');
    });
});
