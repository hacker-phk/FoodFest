const express = require("express");
const app = express();
const Pizza = require("./Modals/pizzaModal");
const db = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working :>");
});

app.get("/getPizzas", (req, res) => {
  Pizza.find()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data from the database.");
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
