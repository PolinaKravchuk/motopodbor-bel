import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

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
    <div className="w-full mx-auto justify-between items-center hidden md:flex">
      {/* Logo */}
      <div>
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            className="h-8 mr-2"
            width={80}
            height={20}
          />
          <span className="font-bold text-lg">МОТОПОДБОР.БЕЛ</span>
        </Link>
      </div>

      {/* Contact and Social Links */}
      <div className="flex items-center space-x-4">
        <div>
          <p>Время работы Пн-Пт с 9:00 до 19:00</p>
          <p>Суббота по согласованию</p>
        </div>
      </div>
    </div>
  );
};
export default ContactsPanel;
