const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

// GET endpoint: Tüm iletileri al
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST endpoint: Yeni bir ileti oluştur
router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newContact = new Contact({ name, email, phone, message });
    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
