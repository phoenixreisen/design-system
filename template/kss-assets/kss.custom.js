/**
 * Navigation
 *
 * Toggelt auf mobilen Geräten die Navigation bzw. setzt einen
 * entsprechenden Event-Handler auf das Hamburger-Icon.
 */
(function() {
    var toggle = document.querySelector('#kss-nav__menu-toggle');
    var sidebar = document.querySelector('.kss-sidebar');
    var toggleClassName = 'kss-sidebar--visible';

    toggle.addEventListener('click', function() {
        sidebar.classList.contains(toggleClassName)
            ? sidebar.classList.remove(toggleClassName)
            : sidebar.classList.add(toggleClassName);
    });
})();

/**
 * Swiper
 *
 * Ruft auf der Swiper-Seite den Code vom CDN ab, packt ihn in
 * den DOM und initialisiert/startet Swiper mit der Phx-Konfig.
 */
(function() {
    if(document.querySelector('.swiper-container')) {
        // Swiper CSS nachträglich in DOM hinzufügen
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
        document.head.prepend(link);

        // Swiper JS nachträglich in DOM hinzufügen
        var script = document.createElement('script');
        script.src = 'https://unpkg.com/swiper/swiper-bundle.js';
        script.onload = () => {
            new Swiper('.swiper-container', {
                simulateTouch: false,
                shortSwipes: false,
                longSwipes: true,
                pagination: {
                    clickable: true,
                    el: '.swiper-pagination',
                    renderBullet: (index, className) => {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            });
        };
        document.body.appendChild(script);
    }
})();