import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import Post from "./Post";
import { useNavigate } from "react-router-dom";
import Loader from "../../component/Loader";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loader, setLoader] = useState(true);
  const uri = "http://localhost:4000/posts";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(uri);
        //gelen postları tarihe göre sıralar
        const sortedPosts = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sortedPosts);
        // postlar set edilgidinde loaderi durdurur
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [uri, posts]);

  const visiblePosts = showAll ? posts : posts.slice(0, 5);
  const navigate = useNavigate();
  return (
    <div>
      <Hero
        img="https://i.pinimg.com/564x/d2/40/a9/d240a920f31451363692329ecc49653d.jpg"
        title="Halik Anık"
        text="Kişisel minimalist bir site veya blog."
      />
      <div className="mt-32 max-w-2xl m-auto mb-24 ">
        <h3 className="text-white text-2xl mb-8 font-semibold">
          Güncel Bloglar
        </h3>
        {loader ? (
          <div className="flex items-center justify-center my-16">
            <Loader />
          </div>
        ) : (
          visiblePosts.map((item, index) => (
            <Post
              key={index}
              title={item.title}
              date={item.date}
              id={item._id}
            />
          ))
        )}
        
        {posts.length > 5 && !showAll && (
          //Eğer gelen posts versinin uzunlugu 5 i geçmiş ise 5 de keser altına bir button oluşturur ve blog safasına yönlendirir
          <button className=" underline" onClick={() => navigate("/blog")}>
            Daha fazla blog
          </button>
        )}
      </div>
    </div>
  );
}


