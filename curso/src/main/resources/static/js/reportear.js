function reportear(tipo){
    var iframe = document.getElementById("mifra");
    const container = document.getElementById('html');
    const datatheme = "datatheme="+container.getAttribute('data-theme')
    console.log(datatheme)
    argumento="http://10.107.226.241:8050/asdf/?"+datatheme;
   
  if (tipo === 'charts') {
    argumento = "http://10.107.226.241:8050/asdf/?"+datatheme;
  } else if (tipo === 'antiguedad') {
    argumento = "http://10.107.226.241:8050/antiguedad100/?"+datatheme;
  } else if (tipo === 'stock') {
    argumento = "http://10.107.226.241:8050/stock100/?"+datatheme;
  } else if (tipo === 'traspasos') {
    argumento = "http://10.107.226.241:8050/traspasos100/?"+datatheme;
  } else if (tipo === 'tracking') {
    argumento = "http://10.107.226.241:8050/tracking100/?"+datatheme;
  } else if (tipo === 'pkt') {
    argumento = "http://10.107.226.241:8050/pkt100/?"+datatheme;
  } else if (tipo === 'sameday') {
    argumento = "http://10.107.226.241:8050/samedaytodes/?"+datatheme;
  } else if (tipo === 'capacidades') {
    argumento = "http://10.107.226.241:8050/capacidades/?"+datatheme;
  } else if (tipo === 'charts12') {
    argumento = "http://10.107.226.241:8050/clu12/?"+datatheme;
  } else if (tipo === 'antiguedad12') {
    argumento = "http://10.107.226.241:8050/antiguedad12/?"+datatheme;
  } else if (tipo === 'stock12') {
    argumento = "http://10.107.226.241:8050/stock12/?"+datatheme;
  } else if (tipo === 'traspasos12') {
    argumento = "http://10.107.226.241:8050/traspasos12/?"+datatheme;
  } else if (tipo === 'tracking12') {
    argumento = "http://10.107.226.241:8050/tracking12/?"+datatheme;
  } else if (tipo === 'pkt12') {
    argumento = "http://10.107.226.241:8050/pkt12/?"+datatheme;
  } else if (tipo === 'charts150') {
    argumento = "http://10.107.226.241:8050/clu150/?"+datatheme;
  } else if (tipo === 'antiguedad150') {
    argumento = "http://10.107.226.241:8050/antiguedad150/?"+datatheme;
  } else if (tipo === 'stock150') {
    argumento = "http://10.107.226.241:8050/stock150/?"+datatheme;
  } else if (tipo === 'traspasos150') {
    argumento = "http://10.107.226.241:8050/traspasos150/?"+datatheme;
  } else if (tipo === 'tracking150') {
    argumento = "http://10.107.226.241:8050/tracking150/?"+datatheme;
  } else if (tipo === 'pkt150') {
    argumento = "http://10.107.226.241:8050/pkt150/?"+datatheme;
  } else if (tipo === 'despachosbodegas') {
    argumento = "http://10.107.226.241:8050/despachosbodegas/?"+datatheme;
  } else if (tipo === 'dotero') {
    argumento = "http://10.107.226.241/etiquetero/dotero/?"+datatheme;
  } else if (tipo === 'etiquetero') {
    argumento = "http://10.107.226.241/etiquetero/?"+datatheme;
  }

  // Guardar el src en localStorage
  localStorage.setItem('iframeSrc', argumento);

  // Establecer el src del iframe
  iframe.src = argumento;

 
}

iframe.onload = function() {
  let link = document.createElement("link");
  link.href = "http://10.107.226.241/etiquetero/css/sb-admin-2.css";      /**** your CSS file ****/ 
  link.rel = "stylesheet"; 
  link.type = "text/css"; 
  frames[0].document.head.appendChild(link); /**** 0 is an index of your iframe ****/ 
}
// Obtener el src del iframe almacenado en localStorage
var storedSrc = localStorage.getItem('iframeSrc');
if (storedSrc) {
  var iframe = document.getElementById('mifra');
  iframe.src = storedSrc;
}

