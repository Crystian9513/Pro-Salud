function validarUsuario(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    //  verificar si el usuario y contraseña son correctos.
    if (username === '' && password === '') {
      window.location.href = "sesion.html";
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  };

  // desplazamiento de imagenes y formularios.
document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});
  

 
