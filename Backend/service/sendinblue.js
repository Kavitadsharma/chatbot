
const nodemailer=require("nodemailer")
class sendingblue{
    async sendMail(email,sub,emailContent){
        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            auth: {
              user: "kavitadsharma899107@gmail.com",
              pass:"xsmtpsib-744136105ae18c9bbfb31faf68ba92bdddf4b3204cb38dcc469921edecf9eb8d-QX1gHbSEYhxD983c",
            },
          })
    
          const mailOptions = {
            from: 'office@mcme.in',
            to:"sdsharma8991@gmail.com",
            subject: "alert customer query",
            html: "http://127.0.0.1:5500/frontend/chat.html",
          };
    
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.error(err);
              
            } 
          });

    }
}
module.exports=new sendingblue()