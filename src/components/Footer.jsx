import { LogoWhite } from "../assets";
import { LogoDark } from "../assets";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto text-white flex items-center gap-5 sm:justify-between flex-col sm:flex-row">
      <a href="/">
        <LogoDark />
      </a>
      <div className="flex flex-col items-center">
        <p>Copyright &copy; {new Date().getFullYear()}, All Right Reserved,</p>

        {/* Link ke lokasi */}
        <a
          href="https://maps.app.goo.gl/TdnoeJAQLXaAsJ2G9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          📍 Lihat Lokasi Kami
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
