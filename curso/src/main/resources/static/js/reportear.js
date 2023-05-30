function reportear(tipo){
    var iframe = document.getElementById("mifra");
    argumento="http://10.107.226.241:8050/asdf/";
   
  if (tipo === 'charts') {
    argumento = "http://10.107.226.241:8050/asdf/";
  } else if (tipo === 'antiguedad') {
    argumento = "http://10.107.226.241:8050/antiguedad100/";
  } else if (tipo === 'stock') {
    argumento = "http://10.107.226.241:8050/stock100/";
  } else if (tipo === 'traspasos') {
    argumento = "http://10.107.226.241:8050/traspasos100/";
  } else if (tipo === 'tracking') {
    argumento = "http://10.107.226.241:8050/tracking100/";
  } else if (tipo === 'pkt') {
    argumento = "http://10.107.226.241:8050/pkt100/";
  } else if (tipo === 'sameday') {
    argumento = "http://10.107.226.241:8050/samedaytodes/";
  } else if (tipo === 'capacidades') {
    argumento = "http://10.107.226.241:8050/capacidades/";
  } else if (tipo === 'charts12') {
    argumento = "http://10.107.226.241:8050/clu12/";
  } else if (tipo === 'antiguedad12') {
    argumento = "http://10.107.226.241:8050/antiguedad12/";
  } else if (tipo === 'stock12') {
    argumento = "http://10.107.226.241:8050/stock12/";
  } else if (tipo === 'traspasos12') {
    argumento = "http://10.107.226.241:8050/traspasos12/";
  } else if (tipo === 'tracking12') {
    argumento = "http://10.107.226.241:8050/tracking12/";
  } else if (tipo === 'pkt12') {
    argumento = "http://10.107.226.241:8050/pkt12/";
  } else if (tipo === 'charts150') {
    argumento = "http://10.107.226.241:8050/clu150/";
  } else if (tipo === 'antiguedad150') {
    argumento = "http://10.107.226.241:8050/antiguedad150/";
  } else if (tipo === 'stock150') {
    argumento = "http://10.107.226.241:8050/stock150/";
  } else if (tipo === 'traspasos150') {
    argumento = "http://10.107.226.241:8050/traspasos150/";
  } else if (tipo === 'tracking150') {
    argumento = "http://10.107.226.241:8050/tracking150/";
  } else if (tipo === 'pkt150') {
    argumento = "http://10.107.226.241:8050/pkt150/";
  } else if (tipo === 'despachosbodegas') {
    argumento = "http://10.107.226.241:8050/despachosbodegas/";
  }

  // Guardar el src en localStorage
  localStorage.setItem('iframeSrc', argumento);

  // Establecer el src del iframe
  iframe.src = argumento;
}

// Obtener el src del iframe almacenado en localStorage
var storedSrc = localStorage.getItem('iframeSrc');
if (storedSrc) {
  var iframe = document.getElementById('mifra');
  iframe.src = storedSrc;
}