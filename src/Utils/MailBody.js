exports.signupEmailBody = (name,id)=>{
    return`
    <!doctype html>
    <html>
        <head>
        </head>
        <body>
            <p>Dear ${name} ,</p>
            <h1>Contrgatulation !!</h1>
            <h1>Welcome To Our Company</h1>
            <a href ="http://192.168.0.11:8050/api/v1/auth/verifyLink/${id}">verify</a>
        </body>
    </html>
    
    `
}