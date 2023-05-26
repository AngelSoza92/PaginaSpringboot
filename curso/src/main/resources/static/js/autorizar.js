$(document).ready(function() {
    autorizar();
    actualizarEmailUsr();
  });

function actualizarEmailUsr(){
    var request = new XMLHttpRequest();
    request.open('GET', 'http://10.107.226.241/apis/user?mail='+localStorage.email+'', true);
    request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var data = JSON.parse(request.responseText);
      console.log(data);
  
      document.getElementById('txt-email-usuario').outerHTML =data[0].FIRST_NAME;
    }
  };
  request.send();
  }  

let autorizarEjecutandose = false;

async function autorizar(){
    
  if (autorizarEjecutandose) {
    return; // Si la función ya se está ejecutando, no hacer nada
  }

  autorizarEjecutandose = true; // Establecer la bandera como verdadera

  const request = await fetch('api/validar', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    }
  });

  const respuesta = await request.text();

  if (respuesta === "respuesta") {
    //alert("acceso concedido");
  } else {
    window.location.replace("login.html");
  }

  autorizarEjecutandose = false; // Restablecer la bandera como falsa

}