import React from "react";
import { FiHome } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCat } from "react-icons/fa";

export default function Navbar({ data }) {
  const { pathname } = useLocation();
  const navigator = useNavigate();
  return (
    <header className="flex justify-between max-w-c items-center py-4 px-1.5 b ">
      <FiHome
        size={24}
        style={{ cursor: "pointer" }}
        //Anasayfaya yönlendirir
        onClick={() => navigator("/")}
      />
      <ul className="flex gap-4 ">
        {data.map((item) => (
          // App.js içerisinden navbara props ettigimiz arr içindeki verileri yazdırır
          <li key={item.id}>
            <Link
              to={item.path}
              className={
                //item.path mevcut path ise beyaz degil ise gray verir basit bir active rengi
                pathname === item.path
                  ? "text-white font-medium "
                  : "decoration-gray-400"
              }
            >
              {item.page}
            </Link>
          </li>
        ))}
        <span className="mx-2"> | </span>
        <FaCat
          style={{ cursor: "pointer" }}
          size={24}
          //kediyi miyavlatır miyavv
          onClick={() => alert("Miyav")}
        />
      </ul>
    </header>
  );
}
