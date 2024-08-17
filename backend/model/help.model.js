const express = require("express");
const mongoose = require("mongoose");

const helpSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("helpModel", helpSchema);
