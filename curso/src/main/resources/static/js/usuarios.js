// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmailUsr();
});



function actualizarEmailUsr(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://10.107.226.241/apis/user?mail='+localStorage.email+'', true);
  request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    var data = JSON.parse(request.responseText);
    console.log(data);
    // Aquí puedes acceder a los datos del archivo JSON
    //console.log(data[0].FIRST_NAME);
    //console.log('http://10.107.226.241/apis/user?mail='+localStorage.email+'');
    document.getElementById('txt-email-usuario').outerHTML =data[0].FIRST_NAME;
  }
};
request.send();
}

function getHeaders(){
  return{
    'Accept':'application/json',
    'Content-Type':'application/json',
    'Authorization':localStorage.token
  };
}


async function cargarUsuarios(){
  
  const request = await fetch('api/usr',{method:'GET',headers:getHeaders()});
  const usuarios = await request.json();
  let listadoHTML='';
  
  if(!Array.isArray(usuarios)) {
    alert('El objeto usuarios no es un arreglo');
    return;
  }

  for(let usuario of usuarios){
    let telefono = usuario.telefono == null ? '-':usuario.telefono;
    let botonEliminar = '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle btn-sm" zn_id="38">    <i class="fas fa-trash" zn_id="39"></i></a>';
    let usuarioHTML = '<tr><td>'+usuario.id+'</td><td>'+usuario.nombre+''+usuario.apellido+'</td><td>'+usuario.email+'</td><td>'+telefono+'</td><td>'+botonEliminar+'</td></tr>';
    listadoHTML += usuarioHTML;
  }

  document.querySelector('#usuarios tbody').outerHTML=listadoHTML;
}

async function eliminarUsuario(id){
  if(!confirm('¿Desea eliminar este usuario?'+id)){
    return null;
  }
  else{
    try {
      alert('entramos al delete json');
      const request = await fetch('api/usr/'+id, {
        method:'DELETE',
        headers:getHeaders()
        
      });
      location.reload();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
}