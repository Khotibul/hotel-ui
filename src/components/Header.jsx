import { useRoomContext } from "../context/RoomContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogoWhite } from "../assets"; // SVG Logo
import { LogoDark } from "../assets"; // SVG Logo

const Header = () => {
  const { resetRoomFilterData } = useRoomContext();

  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    );
  });

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Facility", path: "/facilities" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed z-40 w-full transition-all duration-200 
      ${header ? "bg-white py-4 shadow-lg" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0">
        {/* Logo */}
        <Link to="/" onClick={resetRoomFilterData}>
          {
            header ? (
              <LogoDark className="w-[190px]" /> //<img className='w-[160px]' src={LogoDark} />
            ) : (
              <LogoWhite className="w-[190px]" />
            ) //<img className='w-[160px]' src={LogoWhite} />
          }
        </Link>

        {/* Nav */}
        <nav
  className={`${header ? "text-primary" : " text-accent"}
  flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[1px] text-[18px] items-center uppercase`}
>
  {navLinks.map((link) => (
    <Link 
      to={link.path}   // ⬅️ ganti sesuai path
      className="relative transition font-bold after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      key={link.name}
    >
      {link.name}
    </Link>
  ))}
</nav>
      </div>
    </header>
  );
};

export default Header;
