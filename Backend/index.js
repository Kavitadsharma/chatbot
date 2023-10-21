const express = require("express");
const cors=require("cors")
const sendingBlue = require("./service/sendinblue");
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server running');
});
const io = require("socket.io")(8081);
const socketIOFunction = require('./KYC/kyc')
socketIOFunction(io)
const createWebSocketServer = require('./chatbot/live');
const wss = createWebSocketServer(server);
const PORT = 8082;
server.listen(PORT, () => {
  console.log("server is running on port" + PORT)
})


const app = express();
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('home page');
});

app.post("/sendEmail", async (req, res) => {
 

  try {
    await sendingBlue.sendMail();
    console.log("send")
    res.sendStatus(200);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

const expressPort = 8080; 
app.listen(expressPort, () => {
  console.log(`Express server is running on port ${expressPort}`);
});
