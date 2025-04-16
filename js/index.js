document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('#nav-list');

    hamburger.addEventListener('click', function () {
        navList.classList.toggle('active');

        const isExpanded = navList.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);

        hamburger.textContent = isExpanded ? '✕' : '☰';
    });

    document.addEventListener('click', function (event) {
        const isClickInside = navList.contains(event.target) || hamburger.contains(event.target);

        if (!isClickInside && navList.classList.contains('active')) {
            navList.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.textContent = '☰';
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && navList.classList.contains('active')) {
            navList.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.textContent = '☰';
        }
    });
});
