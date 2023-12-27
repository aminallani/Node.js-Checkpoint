let nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    service: 'gmail' ,
    auth:{
        user:'Amine@gmail.com',
        pass:'0000'
    }
})

let mailOPtions = {
    from: 'Amine@gmail.com',
    to : 'someone@gmail.com',
    subject : 'sending mail with Node',
    Text : 'that was easy',
}

transporter.sendMail(mailOPtions, function(error,info){
    if (error) {
        console.log(error)
    } else {
        console.log('E-mail sent: ' +info.response);
    }
})
