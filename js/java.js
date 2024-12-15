window.addEventListener('scroll', function() {
    const title = document.getElementById('title');
    const content = document.getElementById('content');
    if (window.scrollY > 50) {
        title.style.fontSize = '6rem';
        title.style.top = '50%';
        title.style.transform = 'translateY(-50%)';
        content.classList.add('show');
    } else {
        title.style.fontSize = '3rem';
        title.style.top = '4%';
        title.style.transform = 'translateY(0)';
        content.classList.remove('show');
    }
});
