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

    const container = document.querySelector('.image-container');
    const images = document.querySelectorAll('.image-container .image');
    const dotsContainer = document.querySelector('.dots-container');
    let currentIndex = 0;

    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    function updateSlider() {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        // Оновлюємо активний дот
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }
});
