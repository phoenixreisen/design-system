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