import React from "react";
import Menu from "./Menu";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

function Footer() {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "Teknoloji Kariyerleri",
        },
        {
          title: "İletişim",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Sıkça Sorulan Sorular",
        },
        {
          title: "Kişisel Verilerin Korunması",
        },
        {
          title: "Gizlilik Politikası",
        },
        {
          title: "Kullanım Koşulları",
        },
        {
          title: "Çerez Politikası",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Bayimiz Olun",
        },
        {
          title: "Deponuzu Kiralayın",
        },
        {
          title: "GetirYemek Restoranı Olun",
        },
        {
          title: "GetirÇarşı İşletmesi Olun",
        },
        {
          title: "Zincir Restoranlar",
        },
      ],
    },
  ];

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 pt-10">
          <section>
            <h6 className="text-primary-brand-color mb-4 text-lg">
              Getir'i indirin!
            </h6>
            <nav className="grid gap-y-4">
              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </a>
            </nav>
          </section>

          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 mt-6 py-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            &copy; 2023 Getir{" "}
            <a
              href="#"
              className="text-primary-brand-color hover:underline relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3">
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 hover:bg-purple-100  hover:text-primary-brand-color transition-colors flex items-center justify-center "
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 hover:bg-purple-100  hover:text-primary-brand-color transition-colors flex items-center justify-center "
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 hover:bg-purple-100  hover:text-primary-brand-color transition-colors flex items-center justify-center "
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="h-8 px-2 text-sm rounded-lg  bg-gray-100 text-gray-500 hover:bg-purple-100  hover:text-primary-brand-color transition-colors flex items-center "
            >
              <BiGlobe size={20} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
