const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())
let cors = require('cors')
app.use(cors())
const { createTransport } = require('nodemailer');
const publicDirectoryPath = path.join(__dirname, './client')
app.use(express.static(publicDirectoryPath))
const port = process.env.PORT || 3400




app.post('/sendmail', (req, res) => {

  
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'foranyuse2221@gmail.com',
      pass: 'xyvzcmzzrgeiffvg'
    }
});

const mailOptions = {
    from: 'foranyuse2221@gmail.com',
    to: 'foranyuse2221@gmail.com',
    subject: `mail from websolve`,
    html: `<p>
    Name: ${req.body.name}<br>
    Email: ${req.body.email}<br>
    Subject: ${req.body.subject}<br>
    Message: ${req.body.message}
</p>`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
  
  res.send(JSON.stringify({ message: 'Mail Sent Successfully' }));
});

app.listen(port)


