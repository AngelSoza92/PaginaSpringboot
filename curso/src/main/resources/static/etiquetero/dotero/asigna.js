const formAsignation = document.getElementById('formAsignar');
formAsignation.addEventListener('submit', (e) => {
  e.preventDefault();
  const txtrun = document.getElementById('txtRun');
  const txtuser = document.getElementById('txtUser');
  formatoRut(txtrun.value);
  const run = txtrun.value.toUpperCase();
  const user = txtuser.value.toUpperCase();
  fetch('http://10.107.226.241/apis/dot/asignea', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ run: run,  user: user})
  })
    .then(response => response.json())
    .then(data => {
      const statusResponse = data.status_response;
      if (statusResponse === 'OK') {
        const mensaje = data.mensaje;
        console.log(mensaje);
        showCustomAlert(mensaje);
        limpiarCampos();
      } else {
        showCustomAlert(data.error);
        console.log(data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      showCustomAlert(error);
    });
});
function limpiarCampos(){
  const txtrun = document.getElementById('txtRun');
  const txtuser = document.getElementById('txtUser');
  txtrun.value='';
  txtuser.value='';
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
    console.log('RUT INVALIDO');
    return;
  }
  if (largo < 2) {
    console.log('RUT INVALIDO');
    return;
  }
  for (let i = 0; i < largo; i++) {
    const letra = rut_aux.charAt(i);
    if (letraInvalida(letra)) {
      console.log('RUT INVALIDO');
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
  const txtRut = document.getElementById('txtRun');
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