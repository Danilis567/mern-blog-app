const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require("../models/post.js");

// GET endpoint: Tüm blog yazılarını al
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET endpoint: Belirli bir blog yazısını ID'ye göre al
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Yazı bulunamadı" });
    }

    // Görüntüleme sayısını artır
    post.views += 1;
    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST endpoint: Yeni bir blog yazısı oluştur
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });

  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE endpoint: ID'ye göre bir blog yazısını sil
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Yazı bulunamadı" });
    }

    await post.deleteOne();

    res.json({ message: "Yazı başarıyla silindi" });
  } catch (error) {
    console.error("Yazı silinirken hata oluştu:", error);
    res.status(500).json({ error: error.message });
  }
});

// PUT endpoint: ID'ye göre bir blog yazısını güncelle
//Beceremedim 😑

router.put("/:id/update", async (req, res) => {
  try {
    const postId = req.params.id;

    // postId'nin geçerli olup olmadığını kontrol et
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ message: "Geçersiz yazı ID'si" });
    }

    // Güncelleme mantığına devam et
    const { title, content } = req.body;
    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      { title, content },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Yazı bulunamadı" });
    }

    res.json(updatedPost);
  } catch (error) {
    console.error("Yazı güncellenirken hata oluştu:", error);
    res.status(500).json({ error: error.message });
  }
});

 
module.exports = router;
