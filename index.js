const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./src/queries')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// home page
app.get('/', (req, res) => {
  res.json({
    info: 'Node.js, Express and Postgres API'
  })
})

//route for obtain all users
app.get('/users', db.getUsers)
//route for obtain one user by id
app.get('/users/:id', db.getUserById)
//route for create a new user
app.post('/users', db.createUser)
//route for update all info from one user
app.put('/users/:id', db.updateUser)
//route for deleting a user
app.delete('/users/:id', db.deleteUser)


//start server
app.listen(PORT, () => {
  console.log(`APP running on ${PORT}`)
})