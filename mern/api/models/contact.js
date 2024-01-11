const mongoose = require("mongoose");

// Contact Şeması
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100, // İsim alanının maksimum karakter sayısı
  },
  email: {
    type: String,
    required: true,
    maxlength: 150, // Email alanının maksimum karakter sayısı
  },
  phone: {
    type: String,
    required: true,
    maxlength: 20, // Telefon alanının maksimum karakter sayısı
  },
  message: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

// Contact modeli oluşturuluyor
const Contact = mongoose.model("Contact", ContactSchema);

// Modül, Contact modelini dışa aktarıyor
module.exports = Contact;
