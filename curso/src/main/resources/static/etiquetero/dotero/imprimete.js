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

      if (zebra.NOMBRE === "ET_INTERNET_04") {
        option.selected = true;
      }
    });
  } catch (err) {
    console.error(err);
  }
};
loadzebralist();
const searchIP = document.getElementById('form');
const searchUser = document.getElementById('formRut');
searchUser.addEventListener('submit', (e) => {
  e.preventDefault();
  limpiarcanvas();
  const txtRut = document.getElementById('searchBar');
  formatoRut(txtRut.value);
  const elRut = txtRut.value;
  fetch('http://10.107.226.241/apis/dot/dotea', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ rut: elRut })
  })
    .then(response => response.json())
    .then(data => {
      const statusResponse = data.status_response;
      if (statusResponse === 'OK') {
        const nombreUs = data.NOMBRE;
        const usuarioUs = data.USUARIO;
        const numeroUs = data.NUM;
        const antiUs = data.ANTISENA;
        const tipoUS = data.TYPE_GET;
        crearqr({
          USUARIO: usuarioUs,
          NOMBRE: nombreUs,
          NUM: numeroUs,
          ANTISENA: antiUs,
          TYPE_GET: tipoUS
        });
        console.log('Usuario '+tipoUS);
      } else {
        console.log('Error: ' + data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
function limpiarcanvas() {
  var canvas = document.getElementById('label');
  var ctx = canvas.getContext('2d');
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
}
function crearqr(filtro) {
  var canvas = document.getElementById('label');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var el = kjua({
    text: filtro.USUARIO,
    size: 180,
  });
  var el2 = kjua({
    text: 'cencosud\\' + filtro.USUARIO,
    size: 180,
  });
  var el3 = kjua({
    text: filtro.ANTISENA,
    size: 180,
  });
  el.addEventListener('load', function () {
    ctx.drawImage(el, 80, 70, 180, 180);
  });
  el2.addEventListener('load', function () {
    ctx.drawImage(el2, 310, 70, 180, 180);
  });
  el3.addEventListener('load', function () {
    ctx.drawImage(el3, 540, 70, 180, 180);
  });
  ctx.font = '30px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Usuario', 118, 300);
  ctx.fillText(filtro.NUM, 375, 50);
  ctx.fillText('PDT', 370, 300);
  ctx.fillText('Clave', 591, 300);
  ctx.font = '20px Arial';
  ctx.fillText(filtro.NOMBRE, 40, 360);
}
searchIP.addEventListener('submit', (e) => {
  e.preventDefault();
  var combobox = document.getElementById("zebraSelect");
  var valorSeleccionado = combobox.value;
  const copias = document.getElementById('copias');
  filtroz = valorSeleccionado;
  printz(filtroz);
});
function printz(estaip) {
  let img = document.getElementById('label');
  if (img && img.style) {
    img.style.height = '400px';
    img.style.width = '800px';
  }
  let res = imageToZ64(img, { black: 99, notrim: true });
  var zpl = `^XA^LH0,0^FWN^PON^PMN^LRN^FO10,10^GFA,${res.length},${res.length},${res.rowlen},${res.z64}^PQ${copias.value}^XZ`;
  if (estaip.length > 0) {
    var url = `http://${estaip}/pstprnt`;
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
  }
}
function formatoRut(texto) {
  let rut_aux = '';
  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) !== ' ' && texto.charAt(i) !== '.' && texto.charAt(i) !== '-') {
      rut_aux += texto.charAt(i);
    }
  }
  const largo = rut_aux.length;
  if (largo === 0) {
    showCustomAlert('RUT INVALIDO');
    return;
  }
  if (largo < 2) {
    showCustomAlert('RUT INVALIDO');
    return;
  }
  for (let i = 0; i < largo; i++) {
    const letra = rut_aux.charAt(i);
    if (letraInvalida(letra)) {
      showCustomAlert('RUT INVALIDO');
      return;
    }
  }
  let rut_inv = '';
  for (let i = largo - 1, j = 0; i >= 0; i--, j++) {
    rut_inv += rut_aux.charAt(i);
  }
  let dtexto = '';
  dtexto += rut_inv.charAt(0);
  dtexto += '-';
  let cnt = 0;
  for (let i = 1, j = 2; i < largo; i++, j++) {
    if (cnt === 3) {
      dtexto += '.';
      j++;
      dtexto += rut_inv.charAt(i);
      cnt = 1;
    } else {
      dtexto += rut_inv.charAt(i);
      cnt++;
    }
  }
  rut_inv = '';
  for (let i = dtexto.length - 1, j = 0; i >= 0; i--, j++) {
    rut_inv += dtexto.charAt(i);
  }
  const txtRut = document.getElementById('searchBar');
  txtRut.value = rut_inv.toUpperCase();
}
function letraInvalida(x) {
  if (
    x === '0' ||
    x === '1' ||
    x === '2' ||
    x === '3' ||
    x === '4' ||
    x === '5' ||
    x === '6' ||
    x === '7' ||
    x === '8' ||
    x === '9' ||
    x === 'K' ||
    x === 'k'
  ) {
    return false;
  } else {
    return true;
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
