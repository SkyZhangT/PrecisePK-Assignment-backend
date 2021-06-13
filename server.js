require("dotenv").config();

const express = require("express");
const app = express();
const mongo = require("mongoose");
const cors = require("cors");

mongo.connect(process.env.DB_url, { useNewUrlParser: true });
const db = mongo.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DB"));

app.use(express.json());

const pokemon = require("./router/pokemon");
const trainer = require("./router/trainer");
const battle = require("./router/battle");

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
  );
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.use("/pokemon", pokemon);
app.use("/trainer", trainer);
// app.use("/trainer", get_trainer);

app.listen(8080, () => console.log("Server Started"));
