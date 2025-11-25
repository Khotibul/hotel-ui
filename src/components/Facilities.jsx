import React, { useState } from "react";
import Fasility1 from "../assets/Fasilitas/gym2.jpeg";
import gym from "../assets/Fasilitas/gym.jpeg";
import basket from "../assets/Fasilitas/basket.jpeg";
import lapangan from "../assets/Fasilitas/lapangan1.jpeg";
import lapangan2 from "../assets/Fasilitas/lapangan2.jpeg";
import Playground1 from "../assets/Fasilitas/playground1.jpeg";
import Playground2 from "../assets/Fasilitas/playground2.jpeg";
import Playground3 from "../assets/Fasilitas/playground3.jpeg";
import kolam from "../assets/Fasilitas/kolam1.jpeg";
import kolam1 from "../assets/Fasilitas/kolam2.jpeg";
import restoran from "../assets/Fasilitas/restoran.jpeg";
import restoran1 from "../assets/Fasilitas/restoran1.jpeg";
import restoran2 from "../assets/Fasilitas/restoran2.jpeg";
import restoran3 from "../assets/Fasilitas/restoran3.jpeg";
import restoran4 from "../assets/Fasilitas/restoran4.jpeg";

const facilitiesData = [
  {
    id: 1,
    name: "Kolam Renang",
    description:
      "Kolam renang infinity dengan pemandangan kota yang menakjubkan.",
    image: kolam,
    images: [kolam, kolam1, kolam], // banyak foto
  },
  {
    id: 2,
    name: "Pusat Kebugaran",
    description:
      "Pusat kebugaran modern dengan peralatan lengkap dan instruktur profesional.",
    image: Fasility1,
    images: [Fasility1, gym, basket, lapangan, lapangan2],
  },
  {
    id: 3,
    name: "Restoran Mewah",
    description:
      "Nikmati hidangan lezat dari koki-koki terbaik di restoran kami.",
    image: restoran1,
    images: [restoran1, restoran2, restoran3, restoran4, restoran],
  },
  {
    id: 4,
    name: "Playground",
    description:
      "Ruang pertemuan yang nyaman dan lengkap untuk kebutuhan bisnis Anda.",
    image: Playground1,
    images: [Playground1, Playground2, Playground3],
  },
];

const FacilitiesPage = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen py-40">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide mb-6">
          Fasilitas Kami
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Nikmati pengalaman menginap terbaik dengan fasilitas modern, nyaman,
          dan berkelas yang kami sediakan khusus untuk Anda.
        </p>
        <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
        {facilitiesData.map((facility) => (
          <div
            key={facility.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl transition duration-300 cursor-pointer"
            onClick={() => setSelectedFacility(facility)}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-accent transition">
                {facility.name}
              </h3>
              <p className="text-gray-600 leading-relaxed tracking-normal">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
              onClick={() => setSelectedFacility(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedFacility.name}</h2>
            <p className="text-gray-600 mb-6">{selectedFacility.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedFacility.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedFacility.name}-${idx}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilitiesPage;
