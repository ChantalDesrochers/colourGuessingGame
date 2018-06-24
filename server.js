var express = require('express')
var app = express()
const bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/', function(req, res) {
  // res.send('lalalala')
  res.render("colourgame")
})


app.listen(3000, () => {
  console.log("listening on port 3000")
});