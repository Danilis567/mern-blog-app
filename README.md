# Mern Stack Blog sitesi

![image](https://github.com/Danilis567/mern-blog-app/assets/134603964/28370545-215b-410d-b252-70b7e2d12769)

Projemde, MERN (MongoDB, Express.js, React, Node.js) stack kullanarak bir blog sitesi geliştirdim. Tasarım tercihimde basit ve minimalist bir yaklaşım benimsedim, kullanıcıya sade ve etkili bir deneyim sunmayı hedefledim.

Proje içerisinde genel olarak Tailwind CSS kullanılsa da, bazı özel durumlar için özel CSS kullanımına da yer verdim. Create React App yerine daha hızlı bir yapı olan Vite'i tercih ettim, bu sayede geliştirme süreçlerini daha verimli hale getirdim.

Tailwind CSS'in sunduğu hız ve esneklik, projenin stil yönetimini kolaylaştırdı ve hızlı bir geliştirme süreci sağladı. Tasarımım, minimalizmin getirdiği sadelikle dikkat çekiyor, böylece kullanıcılar içeriklere odaklanabilir ve siteyi rahatlıkla gezinebilir.

Sonuç olarak, MERN stack ile geliştirdiğim bu blog sitesi, basit ve minimalist tasarımıyla dikkat çekerken, Vite ve Tailwind CSS kullanımıyla da geliştirme süreçlerini optimize etmeyi amaçladım.



sitenin görüntüleri :

![image](https://github.com/Danilis567/mern-blog-app/assets/134603964/e0497121-ade1-42c2-ad69-ba3b59c979e6)

```
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

```
if (!post) {
    return (
      <div className="flex items-center justify-center my-64">
        <Loader />
      </div>
    );
  }
```

bunun sayesinde sonsuz bir loader olucak tabi hata durumunda kötü çözüm ama sadece hatalar için değil get işlemi esnasında bekleme süresi boyunca ekranda bu çalışır 
