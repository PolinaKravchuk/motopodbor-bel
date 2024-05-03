const Navigation = () => {
  return (
    <nav className="top-0 left-0 w-ful">
      <ul className="flex items-center space-x-8 text-bold text-xl text-400">
        <li>
          <a
            href="#services"
            className="nav-link hover:text-amber-700 hover:drop-shadow-lg transition-all"
          >
            Услуги и цены
          </a>
        </li>
        <li>
          <a
            href="#check"
            className="nav-link hover:text-amber-700 hover:drop-shadow-lg transition-all"
          >
            Что проверяем
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="nav-link hover:text-amber-700 hover:drop-shadow-lg transition-all"
          >
            О нас
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#contacts"
            className="nav-link hover:text-amber-700 hover:drop-shadow-lg transition-all"
          >
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
