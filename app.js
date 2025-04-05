const { log } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
// app.get('/', (req, res) => {
//     res.status(200).json({message: 'Hello from the server side !!!', app: 'Natours'})
// });

// app.post('/', (req, res) => {
//     res.send('You are post tot this endpoint')
// })
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        result: tours.length,
        data: {
            tours: tours
        }
    })
})

app.post('/api/v1/tours', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        status: 'success',
    })   
})


const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})