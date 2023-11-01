const express = require('express')
const cors = require('cors')

const fruits = require('./fruits')

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Are you reddy!') // main page shows are you reddy!
})

app.get('/fruits', (req, res) => { //this page shows our .json file with the list of fruits
    res.status(200).send(fruits)
})

app.get('/fruits/:id', (req, res) => { //this should show the individual fruit when we call its Id
    const idx = req.params.id
  
    const fruit = fruits[idx - 1]
    
    if (!fruit) {
      res.status(404).json({ error: `Fruit with id ${idx} not found` })
    } else {
      res.status(200).send(fruit)
    }
})

app.post('/fruits/:name', (req, res) => {

    const name = req.params.name

    const fruit = fruits[name]

    if (!fruit) {
        res.status(422).send({error: 'you need a name to create a fruit'})
    } else {
        res.status(201).send(fruit)
    }
  })
  
  

module.exports = app