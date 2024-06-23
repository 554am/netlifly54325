function scrollToContact() {
    document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-container').classList.add('show');
});