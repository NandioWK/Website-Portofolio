// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Animasi scroll
function animateAbout() {
    const about = document.querySelector('.about-section');
    const aboutText = document.querySelector('.about-text');
    const aboutPhoto = document.querySelector('.about-photo');
    if (window.scrollY + window.innerHeight > about.offsetTop + 80) {
        aboutText.style.opacity = 1;
        aboutText.style.transform = 'translateX(0)';
        aboutPhoto.style.opacity = 1;
        aboutPhoto.style.transform = 'translateX(0)';
    }
}
window.addEventListener('scroll', animateAbout);

// animasi edukasi
function animateTimeline() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }
    });
}
window.addEventListener('scroll', animateTimeline);

// Animasi skill
function animateSkills() {
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
}
window.addEventListener('scroll', animateSkills);

// contact dummy
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Pesan anda sudah terkirim! (dummy action)');
    this.reset();
});