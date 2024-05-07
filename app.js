require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const morgan = require("morgan");

const connectDB = require("./config/db");

const auth = require("./middlewares/auth");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(require("cors")());
const path = require("path");
// routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/contact"));

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
  
// server configurations.
app.listen(1000, () => {
  console.log("Server Started");
});
