const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "enquiryform",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  return res.send("fetch data from users");
});

app.post("/api/form", (req, res) => {
  const { name, email, number } = req.body;
  const sql = "INSERT INTO users (name, email, number) VALUES (?, ?, ?)";
  db.query(sql, [name, email, number], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("User added successfully");
    }
  });
});

app.get("/api/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
