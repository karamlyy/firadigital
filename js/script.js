window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailjs.sendForm('service_35h7eff', 'template_ertx21h', this)
            .then(function() {
                alert('Uğurla göndərildi!');
            }, function(error) {
               alert('Xəta baş verdi...', error);
            });
    });
}
