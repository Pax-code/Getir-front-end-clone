import React from "react";

function DownloadMobileApp() {
  return (
    <div className="bg-[url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')] bg-primary-brand-color mt-7 rounded-lg text-white flex justify-between items-center">
      <div className="flex flex-col gap-y-3 p-10">
        <h3 className="font-bold text-2xl tracking-tight">Getir'i indirin!</h3>
        <p className="font-semibold opacity-90">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </p>

        <nav className="mt-5 flex gap-x-2">
          <a href="#" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt="ios"
            />
          </a>
          <a href="#" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt="play-store"
            />
          </a>
          <a href="#" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt="huawei-store"
            />
          </a>
        </nav>
      </div>
      <picture className="mt-8">
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" />
      </picture>
    </div>
  );
}

export default DownloadMobileApp;
