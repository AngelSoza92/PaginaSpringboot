const themeselector = document.getElementById("themeselect")
const container = document.getElementById('html');
const theme = container.getAttribute('data-theme')
const query = "?datatheme="+theme
hash = "#"+theme
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
themeselector.addEventListener("change",async ()=>{
  await sleep(500)
  const theme = container.getAttribute('data-theme')
  hash = "#"+theme
  argumento = url+hash
  console.log(argumento)
  iframe.src = argumento
 
  var test = document.getElementById('mifra');
test.src = iframe.src;
})

function reportear(tipo){
    var iframe = document.getElementById("mifra");
    url = "http://10.107.226.241:8050/asdf/"
    argumento="http://10.107.226.241:8050/asdf/"+hash;
  if (tipo === 'charts') {
    url = "http://10.107.226.241:8050/asdf/" 
  } else if (tipo === 'antiguedad') {
    url = "http://10.107.226.241:8050/antiguedad100/";
  } else if (tipo === 'stock') {
    url = "http://10.107.226.241:8050/stock100/";
  } else if (tipo === 'traspasos') {
    url = "http://10.107.226.241:8050/traspasos100/";
  } else if (tipo === 'tracking') {
    url = "http://10.107.226.241:8050/tracking100/";
  } else if (tipo === 'pkt') {
    url = "http://10.107.226.241:8050/pkt100/";
  } else if (tipo === 'sameday') {
    url = "http://10.107.226.241:8050/samedaytodes/";
  } else if (tipo === 'capacidades') {
    url = "http://10.107.226.241:8050/capacidadestodes/";
  } else if (tipo === 'charts12') {
    url = "http://10.107.226.241:8050/clu12/";
  } else if (tipo === 'antiguedad12') {
    url = "http://10.107.226.241:8050/antiguedad12/";
  } else if (tipo === 'stock12') {
    url = "http://10.107.226.241:8050/stock12/";
  } else if (tipo === 'traspasos12') {
    url = "http://10.107.226.241:8050/traspasos12/";
  } else if (tipo === 'tracking12') {
    url = "http://10.107.226.241:8050/tracking12/";
  } else if (tipo === 'pkt12') {
    url = "http://10.107.226.241:8050/pkt12/";
  } else if (tipo === 'charts150') {
    url = "http://10.107.226.241:8050/clu150/";
  } else if (tipo === 'antiguedad150') {
    url = "http://10.107.226.241:8050/antiguedad150/";
  } else if (tipo === 'stock150') {
    url = "http://10.107.226.241:8050/stock150/";
  } else if (tipo === 'traspasos150') {
    url = "http://10.107.226.241:8050/traspasos150/";
  } else if (tipo === 'tracking150') {
    url = "http://10.107.226.241:8050/tracking150/";
  } else if (tipo === 'pkt150') {
    url = "http://10.107.226.241:8050/pkt150/";
  } else if (tipo === 'despachosbodegas') {
    url = "http://10.107.226.241:8050/despachosbodegas/";
  } else if (tipo === 'dotero') {
    url = "http://10.107.226.241/etiquetero/dotero/";
  } else if (tipo === 'etiquetero') {
    url = "http://10.107.226.241/etiquetero/indextest.html";
  }
  
  argumento = url+hash;

  // Guardar el src en localStorage
  localStorage.setItem('iframeSrc', argumento);

  // Establecer el src del iframe
  iframe.src = argumento;
return url;
 
}

var iframe = document.getElementById("mifra");

iframe.onload = function() {
  let link = document.createElement("link");
  let link2 = document.createElement("link");
  link.href = "http://10.107.226.241/etiquetero/css/sb-admin-2.css";      /**** your CSS file ****/ 
  link.rel = "stylesheet"; 
  link.type = "text/css"; 
  link2.href = "http://10.107.226.241/etiquetero/css/all.min.css"
  link2.rel = "stylesheet"; 
  link2.type = "text/css"; 
  frames[0].document.head.appendChild(link);
  frames[0].document.head.appendChild(link2); /**** 0 is an index of your iframe ****/ 
}


// Obtener el src del iframe almacenado en localStorage
var storedSrc = localStorage.getItem('iframeSrc');
if (storedSrc) {
  var iframe = document.getElementById('mifra');
  iframe.src = storedSrc;
}

