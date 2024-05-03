import Navigation from "../Navigation";
import Home from "../Home";
import ContactsPanel from "../ContactsPanel";
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
        className="font-mono relative bg-cover bg-center  bg-amber-600 bg-no-repeat py-4 h-1/2 w-full"
        style={{
          backgroundImage: `url('../../assets/moto-main.jpg')`,
          filter: "brightness(80%)",
        }}
      >
        <div className="container mx-auto w-full flex items-center justify-between h-full">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6"></h2>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <FaPhone className="text-2xl" />
              <span className="text-lg">+1 123 456 789</span>
            </div>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <FaEnvelope className="text-2xl" />

              <a
                href="mailto: minskenduro@mail.ru"
                className="text-lg flex items-center hover:text-gray-400"
              >
                <span>minskenduro@mail.ru</span>
              </a>
            </div>
          </div>
          <div className="text-center text-white">
            <div className="flex space-x-2">
              <a
                id="motopodbor-link"
                href="https://www.instagram.com/motopodbor.bel"
                className="hover:text-gray-400"
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
                className="hover:text-gray-400"
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
                className="hover:text-gray-400"
              >
                <FaTiktok />
              </a>
              <a
                href="https://t.me/@Expert_mot"
                target="_blank"
                className="hover:text-gray-400"
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
