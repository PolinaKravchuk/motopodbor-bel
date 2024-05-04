import {
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        id="contacts"
        className="relative shadow-inner font-mono bg-cover bg-center  bg-black bg-no-repeat py-4 h-[200px] w-full"
      >
        <img
          src="../../assets/moto-main.jpg"
          alt="Footer Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative container mx-auto w-full flex items-center justify-between h-full">
          <div className="text-center text-white">
            <div className="text-xl">
              {/* Email */}
              <a
                href="mailto: minskenduro@mail.ru"
                className="flex items-center hover:text-amber-400"
              >
                <FaEnvelope className="mr-1" />
                <span>minskenduro@mail.ru</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+375298300647"
                className="flex items-center hover:text-amber-400"
              >
                <FaPhone className="mr-1" />
                <h3>+375 29 830 06 47</h3>
              </a>
            </div>
          </div>
          <div className="text-center text-white">
            {/* Social Links */}
            <div className="flex space-x-2 text-2xl">
              <a
                id="motopodbor-link"
                href="https://www.instagram.com/motopodbor.bel"
                className="hover:text-amber-400"
              >
                <FaInstagram />
                <div
                  id="motopodbor-tooltip"
                  className="hidden absolute bg-gray-800 text-white text-sm px-2 py-1 rounded mt-2"
                >
                  Мотоподбор
                </div>
              </a>
              <a
                id="motoservice-link"
                href="https://www.instagram.com/minskenduro"
                className="hover:text-amber-400"
              >
                <FaInstagram />
                <div
                  id="motoservice-tooltip"
                  className="hidden absolute bg-gray-800 text-white text-sm px-2 py-1 rounded mt-2"
                >
                  Мотосервис
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@minskenduro"
                className="hover:text-amber-400"
              >
                <FaTiktok />
              </a>
              <a
                href="https://t.me/@Expert_mot"
                target="_blank"
                className="hover:text-amber-400"
              >
                <FaTelegram className="w-6 h-6 mr-2" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
