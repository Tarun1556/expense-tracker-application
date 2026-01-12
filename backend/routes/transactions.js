const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// GET all transactions
router.get("/", async (req, res) => {
  const transactions = await Transaction.find().sort({ date: -1 });
  res.json(transactions);
});

// ADD transaction
router.post("/", async (req, res) => {
  const { text, amount } = req.body;
  const transaction = await Transaction.create({ text, amount });
  res.json(transaction);
});

// DELETE transaction
router.delete("/:id", async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
