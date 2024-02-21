// consultar deuda
const myModal = document.getElementById('miModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()

})


function consulta() {

    // Ingresando el id de email a consultar
    var emailField = document.getElementById('emailDeuda');

    // definiendo los caracteres validos
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // test para verificar el email
    if (validEmail.test(emailField.value)) {
        var mail = document.getElementById("emailDeuda")
        window.open('https://www.pagoselectrogps.cl/public/areaCliente.html?' + mail.value, '_blank')
        return true;
    } else {
        alert('Ingresa un Email valido por favor');
        return false;
    }

}



// formulario

const formularioContacto = document.getElementById('formularioContacto')
const textNombre = document.getElementById('textNombre')
const textApellido = document.getElementById('textApellido')
const email = document.getElementById('email')
const textTelefono = document.getElementById('textTelefono')
const mensaje = document.getElementById('mensaje')
const boton = document.getElementById('boton')

formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault()
    e.stopImmediatePropagation()

    const data = new FormData(formularioContacto)

    console.log(data.get('nombre'))
    console.log(data.get('apellido'))
    console.log(data.get('email'))
    console.log(data.get('telefono'))
    console.log(data.get('texto'))
})
// scroll menu
$(window).scroll(function () {
    if ($("#menus").offset().top > 200) {
        $("#menus").addClass("bg-nav");
    } else {
        $("#menus").removeClass("bg-nav");
    }
});