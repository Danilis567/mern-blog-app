import React from "react";

export default function Hero({ img, text, title }) {
  return (
    <div className=" max-w-96 mt-32 gap-4	 mx-auto flex flex-col text-center items-center w-full">
      <img src={img} alt="" className="w-20 h-20 rounded-full" />
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="text-base opacity-95">{text}</p>
    </div>
  );
}
