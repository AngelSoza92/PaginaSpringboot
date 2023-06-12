const formBloqueo = document.getElementById('formBloquear');
formBloqueo.addEventListener('submit', (e) => {
  e.preventDefault();
  const txtuser = document.getElementById('txtUser');
  const user = txtuser.value.toUpperCase();
  fetch('http://10.107.226.241/apis/dot/bloquea', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user: user})
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
  const txtuser = document.getElementById('txtUser');
  txtuser.value='';
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