const mongoose = require("mongoose");

// Blog Yazısı Şeması
const PostSchema = new mongoose.Schema({
  title: String, // Yazı başlığı
  content: String, // Yazı içeriği
  date: { type: Date, default: Date.now }, // Yazının tarihi, varsayılan olarak şu anki zaman
  views: { type: Number, default: 0 }, // Görüntüleme sayısı, varsayılan olarak sıfır
});

// Post modeli oluşturuluyor
const Post = mongoose.model("Post", PostSchema);

// Modül, Post modelini dışa aktarıyor
module.exports = Post;
