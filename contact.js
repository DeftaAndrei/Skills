// Animație de fade-in pentru butoane
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.contact-btn');
    buttons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
            btn.style.transition = 'all 0.5s ease';
        }, index * 100);
    });
});

// Efect de rotație 3D la hover
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 10;
        const angleY = (centerX - x) / 10;
        
        btn.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copiat cu succes!');
    }).catch(() => {
        showNotification('Nu s-a putut copia. Încercați din nou.');
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.getAttribute('href').startsWith('mailto:') || 
            btn.getAttribute('href').startsWith('tel:')) {
            const text = btn.textContent.trim();
            e.preventDefault();
            copyToClipboard(text);
        }
    });
});

// Animație de loading la încărcarea paginii
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);

    if (!navigator.onLine) {
        showNotification('Nu există conexiune la internet');
    }
});

window.addEventListener('online', () => {
    showNotification('Conexiune restabilită');
});

window.addEventListener('offline', () => {
    showNotification('Conexiune pierdută');
});

function detectColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
}
