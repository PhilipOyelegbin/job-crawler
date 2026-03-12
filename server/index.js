const express = require("express");
const cors = require("cors");
const api = require("./routes");
require("dotenv").config();

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/api/v1", api);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Job Search Microservice!" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

app.all("{*path}", (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log("API Gateway active on http://localhost:" + port),
);
