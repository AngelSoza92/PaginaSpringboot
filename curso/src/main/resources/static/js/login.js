// Call the dataTables jQuery plugin
$(document).ready(function() {
    //on ready
  });
  /*
  async function iniciarSesion(){
    let datos={};
    datos.email=document.getElementById('txtEmail').value;
    datos.password=document.getElementById('txtClave').value;

    const request = await fetch('api/login',
    {method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'},
    body: JSON.stringify(datos)
    }
    );

    const respuesta = await request.text();
    if (respuesta !== 'fail') {
        const data = JSON.parse(respuesta);
        localStorage.token = data.token;
        localStorage.email = datos.email;
        
        const nameT = data.nameT;
        const tipoT = data.tipoT;
        localStorage.name = nameT;
        localStorage.tipo = tipoT;
        // Ahora puedes usar nameT y tipoT como desees
        window.location.href = 'usuarios.html';
    } else {
        alert('Credenciales incorrectas');
    }
  };
*/
  async function iniciarSesion(){
    let datos={};
    datos.email=document.getElementById('txtEmail').value;
    datos.password=document.getElementById('txtClave').value;

    const request = await fetch('api/login',
    {method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'},
    body: JSON.stringify(datos)
    }
    );
    //const respuesta = await request.json();
    const respuesta = await request.text();
    if(respuesta !='fail'){
        localStorage.token = respuesta;
        localStorage.email = datos.email;
        window.location.href='usuarios.html'
    }
    else{
        alert('Credenciales incorrectas')
    }
  };
  