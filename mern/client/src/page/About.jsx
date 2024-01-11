import React from "react";
import Contact from "./About/Contact";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <div className="mt-24">
      <div className="mb-8">
        <h1 className="text-white text-4xl mb-8 font-semibold">
          Hakkımda bilmeniz gerekenler
        </h1>
        <div className="flex flex-col gap-12 text-white">
          <p>
            React.js ve Node.js ile tam yığın geliştirmeye odaklanmış tutkulu
            bir front-end geliştiriciyim. Dijital ürünlerin teknik ve görsel
            yönlerini hayata geçirmek beni derinden heyecanlandırıyor. Kullanıcı
            deneyimi yüksek tasarımlar ve anlaşılır, okunabilir ve yüksek
            performanslı kod yazma benim için en önemli önceliklerim arasında.
          </p>

          <p>
            2021 yılında web geliştirici olarak başladığım bu yolculuğumda, o
            zamandan bu yana yeni zorlukları üstlenerek ve yol boyunca en son
            teknolojileri öğrenerek gelişmeye devam ettim. Şimdi, 18'in
            başındayken, web geliştirme yolculuğuma başladıktan 2 yıl sonra
            Next.js, TypeScript, Tailwindcss, gibi modern teknolojileri
            kullanarak son teknoloji web uygulamaları inşa ediyorum.
          </p>
          <p>
            Ben ileriyi düşünen biriyim ve ürünlerin fikir aşamasından
            başlayarak geliştirilme sürecine kadar olan her aşamada çalışmaktan
            keyif alıyorum.
          </p>
        </div>
      </div>
      <br />
      <br /> <br />
      <div className="flex flex-col gap-12">
        <h2 className="text-white text-3xl mb-8 font-semibold text-center">
          Yeteneklerim
        </h2>
        <div className="flex flex-row flex-wrap gap-4 justify-between text-white">
          <div className="flex flex-col gap-2 items-center">
            <FaReact size={24} />
            <p>React</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FaFigma size={24} />
            <p>Figma</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <IoLogoJavascript size={24} />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <SiExpress size={24} />
            <p>Express</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FaNodeJs size={24} />
            <p>Node</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <SiTailwindcss size={24} />
            <p>Tailwind CSS</p>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
      <div className="mt-12 flex flex-col gap-4">
        <h1 className="text-4xl font-semibold text-white mb-8">
          Benim ile iletişime geçin
        </h1>
        <Contact />
      </div>
    </div>
  );
}
