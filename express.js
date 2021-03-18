// const express = require('express')
// const app = express()
// const port = 5000
// app.get('/contact',function(request,response){
//     response.send( "/error.html")
// })
// app.listen(port, function() {
//     console.log(`Director by "Saidjamol_khan" http://localhost:${port}`)
//   })
const { response } = require('express')
const express = require('express')
const app = express()
const port = 5000
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/home.html")
})
app.get('/contact', function (request, response) {
  response.sendFile(__dirname + '/contact.html')
})
app.get('/about', function (req, res) {
  res.sendFile(__dirname + "/about.html")
  console.log(res)
})



app.listen(port, () => {
  console.log(` Director by "Saidjamol_khan"  http://localhost:${port}`)
})
// function bos() {
//       if (bos == '+') {
//         bos = document.getElementById("bn")[0].innerHTML = "./error.html"
//       }else if (bos == '-') {
//         bos = document.getElementById("bn")[0].innerHTML = "./about.html"
//       }
// }
