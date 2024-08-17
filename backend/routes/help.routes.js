const express = require("express");
const helpModel = require("../model/help.model");

const router = express.Router();

router.post("/cards", async (req, res) => {
  try {
    const { title, description } = req.body;

    const newCard = new helpModel({
      title: title,
      description: description,
    });

    const saveCard = await newCard.save();

    res.status(201).json({
      message: "Card created successfully.",
      card: saveCard,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create card",
      error: error.message,
    });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const cards = await helpModel.find();
    res.status(200).json({
      message: "Cards fetched successfully.",
      cards: cards,
    });
  } catch (error) {
    console.log("Error in fetching data", error.message);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

router.get("/cards/:title", async (req, res) => {
  try {
    const title = req.params.title;

    const cards = await helpModel.find({ title: new RegExp(title, "i") });

    if (cards.length > 0) {
      res.status(200).json({
        message: "Card(s) found successfully.",
        card: cards,
      });
    } else {
      res.status(404).json({
        message: "Card not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong server side.",
      error: error.message,
    });
  }
});

module.exports = router;
