
    //enviarSolicitudRecuperacionContrasena(correoElectronico);

  function subm() {
    var email = document.getElementById("input-correo-electronico").value;
    console.log(email);
/*
    var request = new XMLHttpRequest();
    request.open('GET', 'http://10.107.226.241/apis/user?mail='+localStorage.email+'', true);
    request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        var data = JSON.parse(request.responseText);
        console.log(data);
        id = data[0].ID;
    }
    };
*/

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/recuperar-contrasena", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Lógica para manejar la respuesta exitosa del servidor
            alert("Se ha enviado un correo electrónico con las instrucciones para restablecer tu contraseña. Recuerde que el correo podría llegar a la carpea de correos no deseados o Spam");
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            // Lógica para manejar la respuesta de error del servidor
            alert("Ocurrió un error al enviar el correo electrónico de recuperación de contraseña.");
        }
    };

    //var data = JSON.stringify({ email: email });
    
    xhr.send(email);
};

async function cambiarClave(){
    var np1 = document.getElementById("inputnp").value;
    var np2 = document.getElementById("inputnp2").value;
if(np1.length <6){
    alert("Contraseña demasiado corta");
}
else if(np1!=np2){
    alert("Las contraseñas deben coincidir");
}
else{
    var url = new URL(window.location.href);
    var token = url.searchParams.get("token");
    console.log(token);

    const request = await fetch('/nva-clave',
    {method:'POST',
    headers:
    {'Accept':'application/json',
    'Content-Type':'application/json',
    'Authorization':token  
},
body: JSON.stringify({
    nvaClave: np1
})
});
       window.location.href='login.html'
    
}


};