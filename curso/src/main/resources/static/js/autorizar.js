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
        window.location.replace("denied.html");
    }

    var request2 = new XMLHttpRequest();
    request2.open('GET', 'http://10.107.226.241/apis/user?mail='+localStorage.email+'', true);
    request2.onreadystatechange = function() {
    if (request2.readyState === 4 && request2.status === 200) {
      var data = JSON.parse(request.responseText);
      console.log(data);
      // Aquí puedes acceder a los datos del archivo JSON
      //console.log(data[0].FIRST_NAME);
      //console.log('http://10.107.226.241/apis/user?mail='+localStorage.email+'');
      document.getElementById('txt-email-usuario').outerHTML =data[0].FIRST_NAME;
    }
  };
  request2.send();

}