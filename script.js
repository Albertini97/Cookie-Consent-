document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('cookie-consent-popup');
    const acceptButton = document.getElementById('accept-cookies');

    // Verificar si ya se ha dado el consentimiento
    if (!localStorage.getItem('cookieConsent')) {
        popup.style.display = 'block';
    }

    acceptButton.addEventListener('click', function() {
        // Ocultar el popup
        popup.style.display = 'none';

        // Almacenar el consentimiento en localStorage
        localStorage.setItem('cookieConsent', 'aceptado');
    });
});