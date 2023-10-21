
const chatBtn = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const chat=document.querySelector("#chat")
const roomName = document.getElementById("room-name");
const  userList = document.getElementById("users");

const urlParams =  new URLSearchParams(window.location.search)
const username = urlParams.get('username');
const room = urlParams.get("room");

const socket = io("http://localhost:8081/",{transports:["websocket"]});
function DispalyMessage(message) {
let div = document.createElement("div");
    div.className = "card";
    div.style.boxShadow = "0px 54px 55px rgba(0, 0, 0, 0.25), 0px -12px 30px rgba(0, 0, 0, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.12), 0px 12px 13px rgba(0, 0, 0, 0.17), 0px -3px 5px rgba(0, 0, 0, 0.09)";
    div.style.width="fit-content"
    div.style.height="fit-content"
    div.style.backgroundColor = "skyblue"
    div.style.fontSize="1.5rem"
    div.style.margin = "0.5rem"
    let text = document.createElement("h5");
    text.innerText = message;
    text.style.padding = "10px"
    div.appendChild(text);
  chat.appendChild(div)
}

socket.emit("chatbot");
socket.on("message",(message)=>{
   
    DispalyMessage(message)


})
const kycButton = document.getElementById("kyc");
const doneButton = document.getElementById("done");
const chatDiv = document.getElementById("chat");
kycButton.addEventListener("click", () => {
    kycButton.style.display = "none";
    doneButton.style.display = "none";
    const textElement = document.createElement("span");
    textElement.innerHTML = "I want to complete my KYC";
    textElement.style.cssText = "  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; height:fit-content;width:fit-content;margin:1.5rem;font-size: 1.5rem; margin-left: 10px;background-color: rgb(183, 192, 255);box-shadow: 0px 54px 55px rgba(0, 0, 0, 0.25), 0px -12px 30px rgba(0, 0, 0, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.12), 0px 12px 13px rgba(0, 0, 0, 0.17), 0px -3px 5px rgba(0, 0, 0, 0.09);padding: 5px;display:block; ";
    setTimeout(()=>{
        display() 
    },3000)
  chatDiv.appendChild(textElement);
    
   
    setTimeout(() => {
   socket.emit("chatmessage");
   
}, 2000); 
  });


 function display(){
    let text = document.createElement("span");
    const chatt=document.createElement("span")
    text.innerHTML ="I Want to complete my KYC with The help of video" ;
    chatt.innerHTML="chat with us"
    text.style="  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; height:fit-content;width:fit-content;margin:1.5rem;font-size: 1.5rem; margin-left: 10px;background-color: rgb(183, 192, 255);box-shadow: 0px 54px 55px rgba(0, 0, 0, 0.25), 0px -12px 30px rgba(0, 0, 0, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.12), 0px 12px 13px rgba(0, 0, 0, 0.17), 0px -3px 5px rgba(0, 0, 0, 0.09);padding: 5px;display:block; cursor: pointer;transition: background-color 0.3s, color 0.3s;"; 
    
    chatt.style.cssText="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; height:fit-content;width:fit-content;margin:1.5rem;font-size: 1.5rem; margin-left: 10px;background-color: rgb(183, 192, 255);box-shadow: 0px 54px 55px rgba(0, 0, 0, 0.25), 0px -12px 30px rgba(0, 0, 0, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.12), 0px 12px 13px rgba(0, 0, 0, 0.17), 0px -3px 5px rgba(0, 0, 0, 0.09);padding: 5px;display:block; cursor: pointer;transition: background-color 0.3s, color 0.3s;"
   chatDiv.appendChild(text)
    chatDiv.appendChild(chatt)
   
   text.addEventListener("click",()=>{
    
    chatt.style.display="none"

   })
     setTimeout(()=>{
        text.addEventListener("click", () => {
          console.log("kavita")
            socket.emit("kyc")
             });
     },2000)

    chatt.addEventListener("click", async () => {
     
    
      try {
        const response = await fetch("http://localhost:8080/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        
        });
    
        if (response.ok) {
          console.log("Email sent successfully.");
          
          window.location.href = 'chat.html';
        } else {
          console.error("Failed to send email.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    });
    
    
}




let done=document.getElementById("done")
done.addEventListener("click",()=>{
    done.style.display = "none";
    kycButton.style.display = "none";
    const textElement = document.createElement("span");
    const chattt=document.createElement("span")
    textElement.innerHTML = "I faced an Issue at the KYC point It is Asking For Adhar Card";
    chattt.innerHTML="Chat with us"
    chattt.style.cssText=" box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; height:fit-content;width:fit-content;margin:1.5rem;font-size: 1.5rem; margin-left: 10px;background-color: rgb(183, 192, 255);box-shadow: 0px 54px 55px rgba(0, 0, 0, 0.25), 0px -12px 30px rgba(0, 0, 0, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.12), 0px 12px 13px rgba(0, 0, 0, 0.17), 0px -3px 5px rgba(0, 0, 0, 0.09);padding: 5px;display:block"
    textElement.style.cssText = "  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; height:fit-content;width:fit-content;margin:1.5rem;font-size: 1.5rem; margin-left: 10px;background-color: rgb(183, 192, 255);box-shadow: 0px 54px 55px rgba(0, 0, 0, 0.25), 0px -12px 30px rgba(0, 0, 0, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.12), 0px 12px 13px rgba(0, 0, 0, 0.17), 0px -3px 5px rgba(0, 0, 0, 0.09);padding: 5px;display:block;"; 
    
    chatDiv.appendChild(textElement);
   socket.emit("next message")
   setTimeout(()=>{
    chatDiv.appendChild(chattt)
   },1000)
   
   chattt.addEventListener("click", async () => {
     
    
    try {
      const response = await fetch("http://localhost:8080/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      
      });
  
      if (response.ok) {
        console.log("Email sent successfully.");
        
        window.location.href = 'chat.html';
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
})



