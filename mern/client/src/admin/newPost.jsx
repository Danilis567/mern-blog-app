import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigator = useNavigate();
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    [{ img: [] }]["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async () => {
    const formData = { title, content };

    try {
      await axios.post("http://localhost:4000/posts", formData);
      alert("Form başarıyla gönderildi!");
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      alert("Form gönderme hatası!");
    } finally {
      setTitle("");
      setContent("");
      navigator("/");
    }
  };

  return (
    <div className="  w-full mx-auto mt-8">
      <h1 className="text-3xl mb-6 text-white">Yeni Gönderi</h1>
      <form className="flex flex-col  mx-auto text-white">
        <p className="mb-6  text-base">
          id ve date otomatik atanır bubble temasından dolayı seçili eleman
          üzerinde stil uygulanabilir
        </p>
        <label className="mb-4">Başlık</label>
        <input
          type="text"
          className="border p-2 mb-4 ib "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="mb-4">İçerik</label>
        <ReactQuill
          className="ib mb-4"
          theme="bubble"
          value={content}
          onChange={handleContentChange}
          modules={modules}
        />
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleSubmit}
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default NewPost;
