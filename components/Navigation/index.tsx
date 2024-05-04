import { IoMdCloseCircle } from "react-icons/io";

const Navigation = ({
  isMenuOpen,
  onClose,
}: {
  isMenuOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <nav
      className={`${
        isMenuOpen ? "z-10 fixed block bg-slate-700" : "hidden"
      } h-screen md:block md:h-10 top-0 left-0 w-full`}
    >
      {isMenuOpen && (
        <div className="flex justify-end">
          <button onClick={onClose}>
            <IoMdCloseCircle className="text-3xl" />
          </button>
        </div>
      )}
      <ul className="text-3xl block md:flex items-center space-x-8 text-bold md:text-xl text-400">
        <li className="p-4 md:p-0">
          <a
            href="#services"
            className="nav-link hover:text-amber-700 hover:drop-shadow-lg transition-all"
            onClick={onClose}
          >
            Услуги и цены
          </a>
        </li>
        <li className="p-4 md:p-0">
          <a
            href="#check"
            className="nav-link hover:text-amber-700 hover:drop-shadow-lg transition-all"
            onClick={onClose}
          >
            Что проверяем
          </a>
        </li>
        <li className="p-4 md:p-0">
          <a
            href="#about"
            className="nav-link hover:text-amber-700 hover:drop-shadow-lg transition-all"
            onClick={onClose}
          >
            О нас
          </a>
        </li>
        <li className="p-4 md:p-0">
          {" "}
          <a
            href="#contacts"
            className="nav-link hover:text-amber-700 hover:drop-shadow-lg transition-all"
            onClick={onClose}
          >
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
