const WebSocket = require('ws');

function createWebSocketServer(server) {
  const wss = new WebSocket.Server({ noServer: true });

  wss.on('connection', (ws) => {
    console.log('A user connected via WebSocket');

    ws.on('message', (message) => {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message.toString());
        }
      });
    });

    ws.on('close', () => {
      console.log('WebSocket connection closed');
    });
  });

  server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });

  return wss;
}

module.exports = createWebSocketServer;
