const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fizjocare",
});

db.connect((err) => {
  if (err) {
    console.log("Błąd połączenia:", err);
  } else {
    console.log("Połączono z MySQL");
  }
});

app.post("/booking", (req, res) => {
  const {
    name,
    email,
    phone,
    date,
    service,
    message,
  } = req.body;

  const sql = `
    INSERT INTO bookings
    (name, email, phone, date, service, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, phone, date, service, message],
    (err, result) => {
      if (err) {
        console.log(err);

        res.status(500).json({
          error: "Błąd serwera",
        });
      } else {
        res.json({
          success: true,
          message: "Rezerwacja zapisana",
        });
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server działa na porcie 5000");
});