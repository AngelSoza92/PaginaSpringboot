
    //enviarSolicitudRecuperacionContrasena(correoElectronico);

  function subm() {
    var email = document.getElementById("input-correo-electronico").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/recuperar-contrasena", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Lógica para manejar la respuesta exitosa del servidor
            alert("Se ha enviado un correo electrónico con las instrucciones para restablecer tu contraseña.");
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            // Lógica para manejar la respuesta de error del servidor
            alert("Ocurrió un error al enviar el correo electrónico de recuperación de contraseña.");
        }
    };

    var data = JSON.stringify({ email: email });
    xhr.send(data);
};