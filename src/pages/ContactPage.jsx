// src/ContactPage.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-[#e4d8c6] min-h-screen pt-40 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bagian Kiri: Formulir */}
        <div className="lg:col-span-2 bg-[#f8f6f2] p-8 md:p-12 shadow-md">
          <div className="mb-8">
            <h2 className="text-sm tracking-widest text-gray-500 font-bold">CONTACT WITH US</h2>
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mt-2">FEEL FREE TO WRITE US <br />ANYTIME</h1>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nama Anda / Your Name" className="p-4 bg-[#f1efe9] text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c2b29d] transition-all" />
              <input type="email" placeholder="Alamat Email / Email Address" className="p-4 bg-[#f1efe9] text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c2b29d] transition-all" />
              <input type="tel" placeholder="Telepon / Phone" className="p-4 bg-[#f1efe9] text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c2b29d] transition-all" />
              <input type="text" placeholder="Subjek / Subject" className="p-4 bg-[#f1efe9] text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c2b29d] transition-all" />
            </div>
            <textarea placeholder="Tulis Pesan Anda / Write a Message" rows="6" className="w-full p-4 bg-[#f1efe9] text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#c2b29d] transition-all"></textarea>
           <button
              type="submit"
              className="w-full bg-[#3e5659] text-white font-bold py-4 px-6 rounded-sm hover:bg-[#2b3e41] transition-colors focus:outline-none focus:ring-4 focus:ring-[#c2b29d]"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Bagian Kanan: Informasi Kontak */}
        <div className="bg-[#3e5659] text-white p-8 md:p-12 shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-wide mb-8 border-b border-gray-600 pb-4">CONTACT INFORMATION</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-white" />
                <div>
                  <h3 className="text-sm text-gray-300">Have any question?</h3>
                  <p className="text-base font-medium">+62 823-3596-7766</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-white" />
                <div>
                  <h3 className="text-sm text-gray-300">Send Email</h3>
                  <p className="text-base font-medium">info@puridarmosurabaya.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-white" />
                <div>
                  <h3 className="text-sm text-gray-300">Visit Anytime</h3>
                  <p className="text-base font-medium">Jl. Raya Kupang Baru no 17A <br />Surabaya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:text-left">
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <FaFacebook className="text-xl text-gray-300 hover:text-white transition-colors cursor-pointer" />
              <FaTwitter className="text-xl text-gray-300 hover:text-white transition-colors cursor-pointer" />
              <FaInstagram className="text-xl text-gray-300 hover:text-white transition-colors cursor-pointer" />
              <FaPinterest className="text-xl text-gray-300 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;