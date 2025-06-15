import express from 'express';

const app = express()

// Create a simple route
app.get('/usuarios',(req, res) => {
    res.send('Deu green!')
}); 

// Start the server, using "listen"
app.listen(3000)