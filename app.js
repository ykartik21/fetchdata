const express = require("express");
const PORT = process.env.PORT || 3000;

//initialising express
const app = express();

app.use(express.json()); //using middlewares to accept data in json format

app.use(express.urlencoded()); //used to decode the data than has been throught the html form

app.use(express.static("./public")); // serves the public folder as a static folder

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/formPost", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "/public/nextPage.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
