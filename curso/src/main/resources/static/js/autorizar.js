$(document).ready(function() {
    autorizar();
  });
  

async function autorizar(){
    
    const request = await fetch('api/validar',{
        method:'GET',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization':localStorage.token}
    });
    const respuesta = await request.text();
    if(respuesta=="respuesta"){
        //alert("acceso condecido");
    }
    else{
        window.location.replace = "denied.html";
    }
}