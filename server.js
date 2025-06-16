import express from 'express';

const app = express()

const users = []

app.post('/usuarios', (req, res) => {

    

})

// Create a simple route
app.get('/usuarios',(req, res) => {
    res.send('Deu green!')
}); 

// Start the server, using "listen"
app.listen(3000)