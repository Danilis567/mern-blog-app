import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("İleti başarıyla gönderildi!");
        // İleti başarıyla gönderildiyse, formu sıfırla veya başka bir işlem yapabilirsiniz.
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Mesajınız gönderildi");
      } else {
        alert("İleti gönderme başarısız!");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-white flex flex-col gap-4">
      <label className="flex flex-col gap-2">
        İsim
        <input
          className="ib p-2"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={100}
        />
      </label>
      <label className="flex flex-col gap-2">
        Email
        <input
          className="ib   p-2"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={150}
        />
      </label>
      <label className="flex flex-col gap-2">
        Telefon
        <input
          className="ib  p-2"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          maxLength={20}
        />
      </label>
      <label className="flex flex-col gap-2">
        Mesaj
        <textarea
          className="ib  p-2"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <button
        className="bg-blue-500 py-1 px-4 text-lg rounded-sm"
        type="submit"
      >
        Gönder
      </button>
    </form>
  );
};

export default Contact;
