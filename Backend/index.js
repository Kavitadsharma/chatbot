const express = require("express");
const app = express();
const socketio = require("socket.io");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server running');
});


const WebSocket = require('ws');
const io = require("socket.io")(8081);








io.on("connection", (socket) => {
       console.log(" user has joined");

    socket.on("chatbot", () => {
    socket.emit("message","Dear Customer..I'm your personal Bankbizz Assistance.");
    socket.emit("message", "We request you to update your profile detail such as your profession and/or income .Kindly tap here to fill the details")
    socket.emit("message", "what can we help with you")


    socket.on("chatmessage", () => {
       console.log("kh")
      socket.emit("message", "Please select relevant option from Below");
      });
      
      socket.on("kyc",()=>{
        socket.emit("message", "We are excited to know that you want to complete you KYC");
        socket.emit("message", "Before you start your KYC ..Please Take note of the below");
        socket.emit("message", "A.Your Mobile number should be Linked with Your Aadhar.OtherWise you will not be able to recieve the Otp. B.PAN submission should be Mandatory To upgrade your wallet. C.Plaese Keep The original Documents Ready <br/>D.Ensure You Have a Good Internet connectivity");
        socket.emit("message", "Note:-The Video KYC feature is currently unavailable for minors to upgrade their wallets");
        socket.emit("message", "Tap Here and follow the Mention steps to start the video");
        socket.emit("message", "Enter your Name and number");
        socket.emit("message", "Enter The Otp you will recieve on your registered number");
        socket.emit("message", "Fill all the basic details like profession,marital status,parent's name,and then tap to Proceed");
        socket.emit("message", "Enter your PAN card number and tap on Proceed to Video call to start yor video verification to complete your KYC");
        socket.emit("message", "Our agent will come to You For Verification via a video call to confirm your details");
        socket.emit("message", "Thank You For Choosing Bankbizz");
        
      
      })
      ///// Video KYC END HERE////
      socket.on("next message", () => {
        console.log("kh")
       socket.emit("message", "Please Note down the Points to complete Your Kyc");
       socket.emit("message", "You can complete Your KYC without Adhar as Well.However, this facility is available only at select locations.As per RBI guidelines, required verification of original documents to be done only by our Employees. You can find the schedule of our employees by tapping on the below link");
       socket.emit("message", "You need to Provide your PAN and any one among the below Govt.Issued Address Proof Documents in original:Driving License / voterId/Passport/NREGA job Card");
       socket.emit("message", "NOTE:- In case you Don't have PAN .our authorized representative will assisst you in providing a Form 60 declartion as per RBI guidlines");
       
       socket.emit("message", "Thank you for choosing Bankbizz");

       });
       socket.on("contact",()=>{
        socket.emit("message", "Here is Helpline no :- 010420230.And if there is another query you can connect through MAIL:- office@Bankbizz.com")
       })

    socket.on("disconnect", () => {
      console.log("one user left");


    })
  })


})
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


const PORT = 8082;

server.listen(PORT, () => {
  console.log("server is running on port" + PORT)
})
