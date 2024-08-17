const express = require("express");
const mongoose = require("mongoose");
const helpRoutes = require("./routes/help.routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017");

mongoose.connection.on("connected", () => {
  console.log("databasee conected");
});

mongoose.connection.on("error", () => {
  console.log("error in db connected");
});

app.use("/api", helpRoutes);

app.listen(2100, () => {
  console.log("server started bro");
});
