import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigator = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true"
  );

  useEffect(() => {
    if (authenticated) {
      localStorage.setItem("authenticated", "true");
    } else {
      localStorage.removeItem("authenticated");
    }
  }, [authenticated]);

  const handleNewPost = () => {
    navigator("/miyav/admin/newPost");
  };

  const handleDeletePost = () => {
    navigator("/miyav/admin/deletePost");
  };

  const handleGetContact = () => {
    navigator("/miyav/admin/getContact");
  };

  const handleLogin = () => {
    if (username === "danilis" && password === "danilis.567") {
      setAuthenticated(true);
    } else {
      alert("Hatalı giriş yada kaçak 😡");
    }
  };

  return (
    <main className="text-white flex flex-col gap-16 mt-32">
      <h1 className="text-5xl font-semibold">Admin Sayfası</h1>
      {authenticated ? (
        <div className="flex flex-col gap-16 ">
          <button
            onClick={handleNewPost}
            className="bg-green-600 py-4 px-2 text-lg rounded-sm"
          >
            Yeni Gönderi
          </button>
          <button
            onClick={handleDeletePost}
            className="bg-red-500 py-4 px-2 text-lg rounded-sm"
          >
            Gönderi Sil
          </button>
          <button
            onClick={handleGetContact}
            className="bg-blue-500 py-4 px-2 text-lg rounded-sm"
          >
            İletişim isteklerini göster
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <label htmlFor="username">Kullanıcı Adı</label>
          <input
            className="ib p-2  "
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Şifre</label>
          <input
            className="ib p-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 py-2 px-2 text-lg rounded-sm"
          >
            Giriş Yap
          </button>
        </div>
      )}
    </main>
  );
};

export default Admin;
