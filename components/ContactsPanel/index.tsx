import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaTelegram,
} from "react-icons/fa";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

const ContactsPanel = () => {
  useEffect(() => {
    const link = document.querySelector("#motopodbor-link");
    const tooltip = document.querySelector("#motopodbor-tooltip");

    if (link && tooltip) {
      link.addEventListener("mouseenter", () => {
        tooltip.classList.remove("hidden");
      });

      link.addEventListener("mouseleave", () => {
        tooltip.classList.add("hidden");
      });
    }
  }, []);

  useEffect(() => {
    const link = document.querySelector("#motoservice-link");
    const tooltip = document.querySelector("#motoservice-tooltip");

    if (link && tooltip) {
      link.addEventListener("mouseenter", () => {
        tooltip.classList.remove("hidden");
      });

      link.addEventListener("mouseleave", () => {
        tooltip.classList.add("hidden");
      });
    }
  }, []);

  return (
    <div className="w-full mx-auto flex justify-between items-center ">
      {/* Logo */}
      <div>
        <a href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            className="h-8 mr-2"
            width={80}
            height={20}
          />
          <span className="font-bold text-lg">МОТОПОДБОР.БЕЛ</span>
        </a>
      </div>

      {/* Contact and Social Links */}
      <div className="flex items-center space-x-4">
        {/* Email */}
        <a
          href="mailto: minskenduro@mail.ru"
          className="flex items-center hover:text-gray-400"
        >
          <FaEnvelope className="mr-1" />
          <span>minskenduro@mail.ru</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+375298300647"
          className="flex items-center hover:text-gray-400"
        >
          <FaPhone className="mr-1" />
          <h3>+375 29 830 06 47</h3>
        </a>

        {/* Social Links */}
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

        <div>
          <p>Время работы Пн-Пт с 9:00 до 19:00</p>
          <p>Суббота по согласованию.</p>
        </div>
      </div>
    </div>
  );
};
export default ContactsPanel;
