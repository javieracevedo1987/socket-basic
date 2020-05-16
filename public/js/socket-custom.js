var socket = io();

// Escucha de eventos
socket.on("connect", function () {
  console.log("Conectado al servidor");
});

socket.on("disconnect", function () {
  console.log("Se perdió la conexión con el servidor");
});

// Emisión de eventos
socket.emit(
  "enviarMensaje",
  {
    usuario: "Javier",
    mensaje: "Hola mundo",
    email: "JavierAcevedo1987@gmail.com",
  },
  function (res) {
    console.log(res);
  }
);

socket.on("enviarMensaje", function (mensaje) {
  console.log(mensaje);
});
