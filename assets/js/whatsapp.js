
const $form = document.querySelector('#formularioContacto');
const buttonSubmit = document.querySelector('#boton');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '56974764475';
$form.addEventListener('submit', (e) => {
    e.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Enviando...'
    buttonSubmit.disabled = false
    setTimeout(() => {
        let name = document.querySelector('#textNombre').value
        let lastname = document.querySelector('#textApellido').value
        let email = document.querySelector('#email').value
        let tel = document.querySelector("#textTelefono").value
        let mensaje = document.querySelector("#mensaje").value
        let message = 'send?phone=' + phone + '&text=*_Formulario De Contacto_*%0A%0A*Nombre :*%0A' + name + '%0A*Apellido :*%0A' + lastname + '%0A*Correo :*%0A' + email + '%0A*Teléfono :*%0A' + tel + '%0A%0A*Consulta :*%0A%0A' + mensaje
        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar consulta vía WhatsApp'
        buttonSubmit.disabled = false
        $form.reset()
    }, 4000);
});