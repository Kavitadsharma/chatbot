const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
// const bodyParser = require("body-parser");
 const cors = require("cors");
require('dotenv').config()
//const sendingBlue = require("./service/sendinblue");
const socketIOFunction = require("./KYC/kyc");
const createWebSocketServer = require("./chatbot/live");

const app = express();
//const server = http.createServer(app);
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server running');
});
const io = socketIO(server);

const webSocketPort = process.env.webSocketPort;


 app.use(cors());

socketIOFunction(io);

const wss = createWebSocketServer(server);

// HTTP Server
server.listen(webSocketPort, () => {
  console.log("WebSocket server is running on port " + webSocketPort);
});



// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('WebSocket server running');
// });
// const io = require("socket.io")(8081);
// const socketIOFunction = require('./KYC/kyc')
// socketIOFunction(io)
// const createWebSocketServer = require('./chatbot/live');
// const wss = createWebSocketServer(server);
// const PORT = 8082;
// server.listen(PORT, () => {
//   console.log("server is running on port" + PORT)
// })

// const express = require("express");
// const cors=require("cors")
// const sendingBlue = require("./service/sendinblue");
// const app = express();
// const bodyParser = require("body-parser");
// app.use(cors());
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('home page');
// });

// app.post("/sendEmail", async (req, res) => {
 

//   try {
//     await sendingBlue.sendMail();
//     console.log("send")
//     res.sendStatus(200);
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send("Error sending email");
//   }
// });

// const expressPort = 8080; 
// app.listen(expressPort, () => {
//   console.log(`Express server is running on port ${expressPort}`);
// });
