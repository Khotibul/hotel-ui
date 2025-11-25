import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../constants/data";
import { EffectCreative, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectCreative, Autoplay]}
      effect={"creative"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1], // geser ke kiri
        },
        next: {
          translate: ["20%", 0, 0], // geser ke kanan
        },
      }}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {sliderData.map(({ id, title, bg, btnNext }) => (
        <SwiperSlide
          className="h-full relative flex justify-center items-center"
          key={id}
        >
          <div className="z-20 text-white text-center">
            <div className="uppercase font-tertiary tracking-[6px] mb-5">
              Welcome to Puri Darmo
            </div>
            <h1 className="font-primary text-[32px] uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
              {title}
            </h1>

            {/* Tombol WhatsApp */}
            <a
              href={btnNext}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto px-7 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-black transition"
            >
              Book Now
            </a>
          </div>

          {/* Background Gambar */}
          <div className="absolute top-0 w-full h-full">
            <img
              className="object-cover h-full w-full"
              src={bg}
              alt="background"
            />
          </div>

          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/70" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
