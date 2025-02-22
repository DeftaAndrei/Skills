document.addEventListener('DOMContentLoaded', function() {
    const cyberBoostBtn = document.querySelector('.cyber-boost');
    
    // Resetăm stilurile inițiale
    cyberBoostBtn.style.opacity = '0';
    cyberBoostBtn.style.transform = 'translateY(-100%)';
    
    // Adăugăm clasa pentru animație
    requestAnimationFrame(() => {
        cyberBoostBtn.style.animation = 'dropDown 6s ease forwards';
    });

    // Adăugăm efecte la hover
    cyberBoostBtn.addEventListener('mouseenter', () => {
        cyberBoostBtn.style.transform = 'scale(1.1) rotate(5deg)';
        cyberBoostBtn.style.transition = 'all 0.3s ease';
    });

    cyberBoostBtn.addEventListener('mouseleave', () => {
        cyberBoostBtn.style.transform = 'scale(1) rotate(0deg)';
    });

    // Adăugăm efect de click
    cyberBoostBtn.addEventListener('click', () => {
        cyberBoostBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            cyberBoostBtn.style.transform = 'scale(1)';
        }, 150);
    });

    // Adăugăm efect de glitch la intervale aleatorii
    setInterval(() => {
        if (Math.random() > 0.9) { // 10% șansă de activare
            cyberBoostBtn.classList.add('glitch-effect');
            setTimeout(() => {
                cyberBoostBtn.classList.remove('glitch-effect');
            }, 200);
        }
    }, 2000);
});
