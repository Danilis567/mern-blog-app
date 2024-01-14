# Mern Stack Blog sitesi

![image](https://github.com/Danilis567/mern-blog-app/assets/134603964/28370545-215b-410d-b252-70b7e2d12769)

Projemde, MERN (MongoDB, Express.js, React, Node.js) stack kullanarak bir blog sitesi geliştirdim. Tasarım tercihimde basit ve minimalist bir yaklaşım benimsedim, kullanıcıya sade ve etkili bir deneyim sunmayı hedefledim.

Proje içerisinde genel olarak Tailwind CSS kullanılsa da, bazı özel durumlar için özel CSS kullanımına da yer verdim. Create React App yerine daha hızlı bir yapı olan Vite'i tercih ettim, bu sayede geliştirme süreçlerini daha verimli hale getirdim.

Tailwind CSS'in sunduğu hız ve esneklik, projenin stil yönetimini kolaylaştırdı ve hızlı bir geliştirme süreci sağladı. Tasarımım, minimalizmin getirdiği sadelikle dikkat çekiyor, böylece kullanıcılar içeriklere odaklanabilir ve siteyi rahatlıkla gezinebilir.

Sonuç olarak, MERN stack ile geliştirdiğim bu blog sitesi, basit ve minimalist tasarımıyla dikkat çekerken, Vite ve Tailwind CSS kullanımıyla da geliştirme süreçlerini optimize etmeyi amaçladım.



sitenin görüntüleri :

![image](https://github.com/Danilis567/mern-blog-app/assets/134603964/e0497121-ade1-42c2-ad69-ba3b59c979e6)

```jsx
  const { id } = useParams();
  const uri = `http://localhost:4000/posts/${id}`;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(uri);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setPost(null);
      }
    };

    fetchData();
  }, [id, uri]);
```

Bu kod, belirli bir gönderinin detaylarını çekme işlemini gerçekleştirir ve bu işlem sonunda kullanıcıya gönderi detaylarını gösterir.

Hata durumunda ise kullanıcıya bir hata mesajı göstermez, ancak konsola hata mesajını yazar eğer bir hata olursa 

```jsx
if (!post) {
    return (
      <div className="flex items-center justify-center my-64">
        <Loader />
      </div>
    );
  }
```

bunun sayesinde sonsuz bir loader olucak tabi hata durumunda kötü çözüm ama sadece hatalar için değil get işlemi esnasında bekleme süresi boyunca ekranda bu çalışır 


# Get işlemleri

Bu API tarafındaki kod parçaları, iki farklı GET endpoint'i içeriyor. Birincisi, tüm blog yazılarını getiren genel bir endpoint, ikincisi ise belirli bir blog yazısının ID'sine göre detaylarını getiren özel bir endpoint. İşte bu kodları daha detaylı olarak açıklayan bir açıklama:

Tüm Blog Yazılarını Getiren Endpoint:

```jsx
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

router.get("/", async (req, res) => {...}) olarak tanımlanmıştır.
Bu endpoint, tüm blog yazılarını MongoDB veritabanından çeker.
Post.find() metodunu kullanarak bütün blog yazıları alınır.
Başarılı bir şekilde alındığında, bu yazılar JSON formatında yanıt olarak gönderilir (res.json(posts)).
Eğer bir hata oluşursa, 500 (Internal Server Error) durum koduyla birlikte hata mesajı JSON formatında gönderilir.

Belirli Bir Blog Yazısını ID'ye Göre Getiren Endpoint:

```jsx
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
```

router.get("/:id", async (req, res) => {...}) olarak tanımlanmıştır.

Bu endpoint, bir blog yazısının ID'sine göre detaylarını getirir.

Post.findById(req.params.id) metodu kullanılarak belirli bir ID'ye sahip yazı bulunur.

Eğer yazı bulunamazsa, 404 (Not Found) durum koduyla birlikte "Yazı bulunamadı" mesajı JSON formatında gönderilir.

Eğer yazı bulunursa, görüntüleme sayısını artırır (post.views += 1) ve bu değişiklikleri kaydeder (await post.save()).

Son olarak, bulunan yazının detayları JSON formatında yanıt olarak gönderilir (res.json(post)).

Eğer bir hata oluşursa, 500 (Internal Server Error) durum koduyla birlikte hata mesajı JSON formatında gönderilir.

Bu iki endpoint, istemcilere genel blog yazılarını getirme ve belirli bir yazının detaylarını ID'ye göre getirme işlevselliğini sağlar. 

Ayrıca, özellikle ikinci endpoint'te yazının görüntülenme sayısını artırma özelliği de bulunmaktadır.

# Post işlemleri


![image](https://github.com/Danilis567/mern-blog-app/assets/134603964/feecdd33-b106-40d8-bc8e-61fcfd340048)

pek de bir güvenlik önlemi olmasa da buraya erişmeden önce bir şifre istiyor eğer bir kere giriş yapıldıysa localStronge de kaydediyor 

![image](https://github.com/Danilis567/mern-blog-app/assets/134603964/166c7e0f-4eed-43cc-b4c5-acdf931a45da)
id ve date otomatik olarak atanıyor sadece title ve content bölümünü biz berlirliyoruz olması gerektigi gibi .d
content bölümü için ReactQuill paketini kullandım 


POST endpoint: Yeni bir blog yazısı oluştur
```jsx
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
```


# Delete işlemleri


![image](https://github.com/Danilis567/mern-blog-app/assets/134603964/eb4a8f62-5404-452a-818b-3e00d9a11adb)



Aslında anlatmaya gereken pek bir şey yok belli sonuçta 

DELETE endpoint: ID'ye göre bir blog yazısını sil

```jsx
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
```

# Model
Bu kod parçası, MongoDB üzerinde kullanılmak üzere bir Mongoose şeması ve bu şemaya dayalı bir model oluşturuyor 

Blog Yazısı Şemasının Tanımlanması

```jsx
const PostSchema = new mongoose.Schema({
  title: String, // Yazı başlığı
  content: String, // Yazı içeriği
  date: { type: Date, default: Date.now }, // Yazının tarihi, varsayılan olarak şu anki zaman
  views: { type: Number, default: 0 }, // Görüntüleme sayısı, varsayılan olarak sıfır
});
```

mongoose.Schema kullanılarak, MongoDB'de kullanılacak belirli bir şema (schema) tanımlanır. 

Bu şema, bir blog yazısının sahip olabileceği özellikleri belirtir.

Yazının başlığı (title) ve içeriği (content) string türünde, tarih (date) ve görüntüleme sayısı (views) ise sırasıyla Date ve Number türünde alanlardır.

date alanı, varsayılan olarak şu anki zamanı alır (default: Date.now).

views alanı ise varsayılan olarak sıfır alır (default: 0).

```jsx

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

```

mongoose.Schema kullanılarak, MongoDB'de kullanılacak belirli bir şema (schema) tanımlanır.

Bu şema, bir iletişim formu kaydının sahip olabileceği özellikleri belirtir.

name, email, phone ve message alanları string türünde ve belirli kurallara sahip olarak tanımlanmıştır.

name, email, ve phone alanları zorunlu (required: true), aynı zamanda belirli maksimum karakter sınırlarıyla (maxlength) sınırlanmıştır.

date alanı, varsayılan olarak şu anki zamanı alır (default: Date.now).

