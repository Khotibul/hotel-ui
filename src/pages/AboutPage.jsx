import React from "react";
import Header from "../components/Header";
import companyVideo from "../assets/puri yt.mp4"; // pastikan video ada di folder assets/videos

const AboutPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section dengan Video */}
      <div className="relative h-[80vh] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={companyVideo} type="video/mp4" />
          Browser Anda tidak mendukung video.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
      </div>

      {/* Konten Deskripsi */}
      <div className="container mx-auto py-16 px-6">
        <div className="bg-white shadow-xl p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Siapa Kami?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Kami adalah penyedia akomodasi hotel terkemuka yang berdedikasi
            untuk memberikan pengalaman menginap tak terlupakan. Dengan
            fasilitas modern dan layanan berkualitas, kami memastikan setiap
            kunjungan Anda menjadi momen spesial.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Didukung oleh tim profesional, kami siap melayani Anda 24 jam
            sehari, menghadirkan kenyamanan, keamanan, dan kepuasan terbaik
            untuk Anda.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
