const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 4000;

// MongoDB'ye bağlanma işlemi
mongoose.connect(
  "mongodb+srv://hani56932:9jXk99JNwCzmMDFZ@cluster0.sfduxrl.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Cross-Origin Resource Sharing (CORS) middleware kullanımı
//local projenin local de kullanılabilmesi için .d
//miyavlatır 🐈
app.use(
  cors({
    origin: "http://localhost:5173", // İzin verilen origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // İzin verilen HTTP metodları
    credentials: true, // Kredilerin (örneğin, çerezler) kullanılmasına izin ver
  })
);

// JSON verilerini işleyebilmek için express.json() middleware'inin kullanımı
app.use(express.json());

// '/posts' endpoint'i için yönlendirici kullanımı
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

// "post" eendpoint'i için yönlendirici kullanımı
const contactsRouter = require("./routes/contacts");
app.use("/contacts", contactsRouter);

// Uygulamanın belirtilen portta çalıştırılması
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
