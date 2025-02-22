document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');

    // Adăugăm efecte la hover cu mouse-ul
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'scale(1.1) translateY(-2px)';
            e.target.style.transition = 'all 0.3s ease';
        });

        button.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Adăugăm efect de "click"
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Adăugăm un mic efect de "pulsare" la click
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
