function scrollToContact() {
    document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#1AA34A",
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed || result.dismiss === Swal.DismissReason.overlay) {
                form.reset();
                window.location.href = "index.html";
            }
        });
    });

    document.getElementById('form-container').classList.add('show');
});