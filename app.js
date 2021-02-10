
// first we're calling express functions folder from node_modules and assigning it to a variable called express
const express = require('express')

// then we're calling the function express() from express folder and assigning it to a variable called app, which we'll be using more later
const app = express()

// we're telling my server (nodejs) to listen to port 4000 in my localhost in the browser
const PORT = 4000

// we're telling app.js to respond with "hello incode2" when my server is listening to "localhost:4000/" which is the main page of my app
app.get('/', (req, res) => {
    res.send('hello incode2!')
})

// we're telling app.js to respond with the josn objects "hello: 'there', name: 'harry'"  when my server is listening to "localhost:4000/banana" 
app.get('/banana', (req, res) => {
    res.json({
        hello: 'there',
        name: "harry"
    })
})

// to make sure that my nodejs server is working, we get this message in the terminal when we run node app.js
app.listen(PORT, () => {
    console.log(`server is listening on localhost ${PORT}!`)
})

// 2- we imported the file db.js by using the keyword "require()" and assigned it to "db" variable
const db = require('./db/db.js')

// we get the object "myParent" from db.js and print it in json form as a response when the server listens to "localhost:4000/myparent"
app.get('/myparent', (req, res) => {
    res.json(db.myParent);
})

app.get('/mydreamcar', (req, res) => {
    res.json(db.myDreamCar);
})

app.get('/recipes', (req, res) => {
    res.send('all recipes! Cake Lasagne Sandwich')
  })

  // pattern in our url, (:recipeName) is a parameter that the user puts in url
  app.get('/recipes/:recipeName', (req, res) => {
    console.log(req.params)
    // we're assigning what parameter the user put in the url in a string and returning it to the user
    res.send('you are looking for a ' + req.params.recipeName + ' recipe!')
  })
 // example: localhost:4000/recipes/cake/ingredients/eggs
  app.get('/recipes/:recipeName/ingredients/:ingredientName', (req, res) => {
    res.send('you are looking for a ' + req.params.recipeName + ' recipe!, which will need: ' + req.params.ingredientName +".")
  })


  // params/parameters and queries


  app.get('/queryurl', (req, res) => {
      // we're requesting from the nodejs to get the data that the user injected in the url using the keyword ".query" and assigning it in "queryParam" variable
      const queryParam = req.query
      //then we're responding with that same data in json form
      // example: localhost:4000/queryurl/?name=hello&age=23  
      res.json(queryParam)
  })