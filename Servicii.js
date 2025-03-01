document.addEventListener('DOMContentLoaded', function() {
    // Creăm un buton pentru titlu
    const h1Element = document.querySelector('h1');
    const titleButton = document.createElement('button');
    titleButton.className = 'title-button';
    titleButton.innerHTML = h1Element.innerHTML;
    h1Element.innerHTML = '';
    h1Element.appendChild(titleButton);

    // Selectăm conținutul și adăugăm funcționalitatea de click
    const content = document.querySelector('.cybersecurity-content');
    
    titleButton.addEventListener('click', function() {
        content.classList.toggle('active');
    });
});
