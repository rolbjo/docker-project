const express = require('express'),
  path = require('path')
const dotenv = require('dotenv'),
  { Client } = require('pg')
const bodyParser = require('body-parser')

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI,
})

client.connect()

const app = express()

app.use(bodyParser.json())

app.get('/api/:category', async (req, res) => {
  const { category } = req.params
  const { rows } = await client.query(`SELECT * FROM ${category}`)
console.log(`Incoming GET request for category: ${category}`);
  res.json(rows)
})

app.post('/addUser', async (req, res) => {
  const { name } = req.body
  try {
    await client.query('INSERT INTO users (name) VALUES ($1)', [name])
console.log(`Incoming POST request to add user with name: ${name}`);

    res.status(200).json({ message: 'User added successfully', userName: name })
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error: error.message })
  }
})

app.get('/getWelcomeMessage', async (req, res) => {
  try {
    const { rows } = await client.query(
      'SELECT name FROM users ORDER BY id DESC LIMIT 1'
    )
    if (rows.length > 0) {
      res.json({ message: `Welcome, ${rows[0].name}!` })
    } else {
      res.json({ message: 'Welcome!' })
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching welcome message', error: error.message })
  }
})

app.use(express.static(path.join(path.resolve(), 'public')))

app.listen(3000, () => {
  console.log('Redo på http://localhost:3000/')
})

