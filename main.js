document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.toggle-menu').addEventListener('click', function() {
        this.classList.toggle('active');
        document.getElementById('menu').classList.toggle('open');
    });
});