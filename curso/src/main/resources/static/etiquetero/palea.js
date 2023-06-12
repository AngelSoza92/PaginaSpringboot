let zlist = [];
const loadzebralist = async () => {
  try {
    const res = await fetch('http://10.107.226.241/apis/lista_zebras');
    zlist = await res.json();
    const select = document.getElementById('zebraSelect');
    // Recorre el array de objetos y crea las opciones del select
    zlist.forEach((zebra) => {
      const option = document.createElement('option');
      option.text = zebra.NOMBRE;
      option.value = zebra.IP;
      select.add(option);
      if (zebra.NOMBRE === "JESSICA_ZEBRA") {
        option.selected = true;
      }
    });
  } catch (err) {
    console.error(err);
  }
};
var lista = document.getElementById("miLista");

loadzebralist();

const searchIP = document.getElementById('form');

const searchPal = document.getElementById('formPal');
searchPal.addEventListener('submit', (e) => {
  e.preventDefault();
  lista.innerHTML = "";
  const cbPal = document.getElementById("cbPal");
  const tipoPali = cbPal.value.toLowerCase();
  const txtQty = document.getElementById('txtQty');
  const cantidad = txtQty.value;
  fetch('http://10.107.226.241/apis/etiq/' + tipoPali, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ x: cantidad })
  })
    .then(response => response.json())
    .then(data => {
      const statusResponse = data.status_response;
      if (statusResponse === 'OK') {
        const palos = data.palos;
        palos.forEach(function (elemento) {
          var canvas = crearbarra(elemento, tipoPali);
          var li = document.createElement("li");
          li.style.listStyle = "none";
          li.appendChild(canvas);
          lista.appendChild(li);
        });
      } else {
        console.log(data.error);
        showCustomAlert(data.error);
        return;
      }
    })
    .catch(error => {
      console.log(error);
      showCustomAlert(error);
      return;
    });
});

function crearbarra(texto, tipoPali) {
  var canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 400;
  var ctx = canvas.getContext("2d");
  // Dibujar el fondo blanco
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Calcular las dimensiones y la posición del código de barras
  var barcodeWidth = 480;
  var barcodeHeight = 200;
  var bxx = (canvas.width - barcodeWidth) / 2;
  // Crear el código de barras en un canvas temporal
  var tempCanvas = document.createElement("canvas");
  tempCanvas.width = barcodeWidth;
  tempCanvas.height = barcodeHeight;
  // Obtener el contexto del canvas temporal
  var tempCtx = tempCanvas.getContext("2d");
  // Generar el código de barras en el canvas temporal
  JsBarcode(tempCanvas, texto, {
    displayValue: false,
    width: barcodeWidth,
    height: barcodeHeight
  });
  // Copiar el código de barras del canvas temporal al canvas principal
  ctx.drawImage(tempCanvas, bxx, 80, barcodeWidth, barcodeHeight);
  ctx.font = 'bold 60px Times New Roman';
  ctx.fillStyle = 'black';
  ctx.fillText(texto, 227, 340);
  console.log(tipoPali);
  if (tipoPali == 'palit') {
    ctx.font = 'bold 30px Arial';
    ctx.fillText('PALI PARA ETIQUETADO', 220, 60);
  } else if (tipoPali == 'palip') {
    ctx.font = 'bold 30px Arial';
    ctx.fillText('PALI HACIA ETIQUETADO', 214, 60);
  } else {
    ctx.font = 'bold 30px Arial';
    ctx.fillText('CLICK AND COLLECT B100', 202, 60);
  };
  return canvas;
}
searchIP.addEventListener('submit', (e) => {
  e.preventDefault();
  var combobox = document.getElementById("zebraSelect");
  var valorSeleccionado = combobox.value;
  filtroz = valorSeleccionado;
  printz(filtroz);
});
function printz(filtroz) {
  var lista = document.getElementById("miLista");
  var elementosLi = lista.querySelectorAll("li");
  if (elementosLi.length > 0) {
    for (var i = 0; i < elementosLi.length; i++) {
      var elementoLi = elementosLi[i];
      let img = elementoLi.querySelector("canvas");
      if (img && img.style) {
        img.style.height = '400px';
        img.style.width = '800px';
      }
      let res = imageToZ64(img, { black: 99, notrim: true });
      var zpl = `^XA^LH0,0^FWN^PON^PMN^LRN^FO10,10^GFA,${res.length},${res.length},${res.rowlen},${res.z64}^PQ1^XZ`;
      if (filtroz.length > 0) {
        var url = `http://${filtroz}/pstprnt`;
        var method = "POST";
        var async = true;
        var request = new XMLHttpRequest();
        request.onload = function () {
          var status = request.status;
          var data = request.responseText;
        };
        request.open(method, url, async);
        request.setRequestHeader('Content-Length', zpl.length);
        request.send(zpl);
      } else {
        console.log('vacio');
        showCustomAlert('Vacio');
      }
    }
  } else {
    console.log('no hay nada');
    showCustomAlert('No se han generado etiquetas');
  }
}
function showCustomAlert(message) {
  const customAlert = document.getElementById('custom-alert');
  const overlay = document.getElementById('custom-alert-overlay');
  const messageElement = document.getElementById('custom-alert-message');
  messageElement.textContent = message;
  customAlert.style.display = 'block';
  overlay.style.display = 'block';
}
function hideCustomAlert() {
  const customAlert = document.getElementById('custom-alert');
  const overlay = document.getElementById('custom-alert-overlay');
  customAlert.style.display = 'none';
  overlay.style.display = 'none';
}
