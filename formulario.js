// enviarFormulario.js

// Asegúrate de que tu `userID` esté inicializado en el archivo HTML principal o directamente en este archivo.
emailjs.init("qH95FrZdzurR-zrkl");

document.querySelector('.formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreyapellido').value;
    const correo = document.getElementById('correoelectronico').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
    const motivo = document.querySelector('input[name="contacto"]:checked').value;

    const templateParams = {
        nombreyapellido: nombre,
        correoelectronico: correo,
        telefono: telefono,
        mensaje: mensaje,
        motivo: motivo
    };

    // Usar `emailjs.send` como una promesa con `async` y `await`
    (async () => {
        try {
            const response = await emailjs.send('service_7vg2crw', 'template_70zuik4', templateParams);
            alert('Formulario enviado exitosamente!');
            console.log('SUCCESS!', response.status, response.text);
        } catch (error) {
            alert('Hubo un error al enviar el formulario, intenta nuevamente.');
            console.error('FAILED...', error);
        }
    })();
});
