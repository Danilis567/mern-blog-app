// App.js

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./page/Home/Home";
import Blog from "./page/Blog/Blog";
import BlogResult from "./page/Blog/BlogResult";
import About from "./page/About";
import Admin from "./admin/admin";
//react quill tema dosyası
import "react-quill/dist/quill.core.css";
import NewPost from "./admin/newPost";
import DeletePost from "./admin/DeletePost";
import GetContact from "./admin/GetContact";

function App() {
  //dinamik navbar yapısı için basit bir şey gibi
  const pageData = [
    { id: 1, path: "/", page: "Anasayfa" },
    { id: 2, path: "/blog", page: "Blog" },
    { id: 3, path: "/about", page: "Hakkımda" },
  ];

  return (
    <div className={`max-w-c px-4 m-auto `}>
      <Navbar data={pageData} />
      <main className="max-w-c mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogResult />} />
          <Route path="/about" element={<About />} />
          {/* buradan sonrası için şifre lazım   */}
          {/* kullanıcı adı:danilis şifre:  danilis.567   */}
          <Route path="/miyav/admin" element={<Admin />} />
          <Route path="/miyav/admin/newPost" element={<NewPost />} />
          <Route path="/miyav/admin/deletePost" element={<DeletePost />} />
          <Route path="/miyav/admin/getContact" element={<GetContact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
