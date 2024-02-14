// Importar el módulo HTTP de Node.js
const http = require('http');

// Definir la función de manejo de solicitudes
const requestHandler = (request, response) => {
  // Configurar la cabecera de la respuesta HTTP
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Escribir el cuerpo de la respuesta HTTP
  response.end('¡Hola Mundo desde Node.js!\n');
};

// Crear el servidor HTTP y especificar la función de manejo de solicitudes
const server = http.createServer(requestHandler);

// Especificar el puerto en el que el servidor escuchará las solicitudes
const port = 3000;

// Iniciar el servidor y especificar la función de devolución de llamada para manejar eventos de inicio
server.listen(port, (err) => {
  if (err) {
    return console.error('Error al iniciar el servidor:', err);
  }
  
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});
