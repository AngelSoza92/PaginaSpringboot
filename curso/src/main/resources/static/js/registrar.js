// Call the dataTables jQuery plugin
$(document).ready(function() {
    //on ready
  });
  
  async function registrarUsuario(){
    let datos={};
    datos.nombre=document.getElementById('txtNombre').value;
    datos.apellido=document.getElementById('txtApellido').value;
    datos.email=document.getElementById('txtEmail').value;
    datos.password=document.getElementById('txtClave').value;
    let repetirClave = document.getElementById('txtClave2').value;
    if (repetirClave!=datos.password){
        alert('La contraseña debe coincidir');
        return;
    }
    const request = await fetch('api/usr',
    {method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'},
    body: JSON.stringify(datos)
    }
    );
   alert('La cuenta fue creada con exito');
   window.location.href='login.html';

  };
  
