window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailjs.sendForm('service_35h7eff', 'template_ertx21h', this)
            .then(function() {
                console.log('Uğurla göndərildi!');
            }, function(error) {
                console.log('Xəta baş verdi...', error);
            });
    });
}