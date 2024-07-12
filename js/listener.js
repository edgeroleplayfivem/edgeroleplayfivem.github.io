document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let isScrolling = false;
    let currentSection = 0;

    window.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        if (!isScrolling) {
            isScrolling = true;
            
            const direction = e.deltaY > 0 ? 1 : -1;
            currentSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
            
            sections[currentSection].scrollIntoView({ behavior: 'smooth' });

            setTimeout(function() {
                isScrolling = false;
            }, 1000);
        }
    }, { passive: false });

    // Gestione degli eventi per i pulsanti
    document.getElementById('tebexButton').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Tebex button clicked');
        window.alert('Tebex In ARRIVO!');
    });

    document.getElementById('igButton').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('IG button clicked');
        window.alert('IG In ARRIVO!');
    });

    // Debug per tutti i pulsanti
    const buttons = document.querySelectorAll('a.w-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            console.log('Button clicked:', this);
            console.log('Button style:', window.getComputedStyle(this));
        });
    });
});