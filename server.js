//Como já declaramos o Express no app.js, importamos ele aqui.
import app from './src/app.js'

const port = process.env.PORT || 3000;

//Respota
app.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${port}`);
})




//npm init
//npm install nodemon -D
//npm install express