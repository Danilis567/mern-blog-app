import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import IconBox from "./IconBox";

export default function Footer() {
  const iconData = [
    {
      id: 1,
      icon: <FiGithub size={24} className="text-gray-400 hover:text-white" />,
      path: "/",
    },
    {
      id: 2,
      icon: (
        <FaSquareXTwitter
          size={24}
          className="text-gray-400 hover:text-white"
        />
      ),
      path: "/",
    },
    {
      id: 3,
      icon: (
        <FaInstagram size={24} className="text-gray-400 hover:text-white" />
      ),
      path: "/",
    },
    {
      id: 4,
      icon: (
        <MdOutlineAlternateEmail
          size={24}
          className="text-gray-400 hover:text-white"
        />
      ),
      path: "/",
    },
    {
      id: 5,
      icon: <FaLinkedin size={24} className="text-gray-400 hover:text-white" />,
      path: "/",
    },
  ];
  return (
    <footer className="mb-12 mt-14 max-w-64 m-auto ">
      <div className="flex flex-row gap-4 items-center justify-center mb-6">
        {iconData.map((item) => (
          <IconBox key={item.id} icon={item.icon} path={item.path} />
        ))}
      </div>

      <p>© {new Date().getFullYear()} Halik Anık tarafından yapıldı</p>
    </footer>
  );
}
