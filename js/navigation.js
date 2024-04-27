function setActiveNav() {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.pageYOffset >= top && window.pageYOffset < top + height) {
            const sectionId = section.getAttribute('id');
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-target') === sectionId) {
                    item.classList.add('active');
                }
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNav);
window.addEventListener('scroll', setActiveNav);

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const targetId = item.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
            duration: 750
        });
    });
});
