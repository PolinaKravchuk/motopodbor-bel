import Navigation from "../Navigation";
import Home from "../Home";
import ContactsPanel from "../ContactsPanel";

const Header = () => {
  return (
    <>
      <header
        className="font-mono relative bg-cover bg-center bg-no-repeat text-white py-4 h-screen w-full"
        style={{
          backgroundImage: `url('../../assets/moto-main.jpg')`,
        }}
      >
        <div className="w-full mx-auto p-4 z-10 fixed">
          <div className="mx-auto p-4 z-10 rounded-xl shadow-md bg-amber-600">
            <ContactsPanel />
            <Navigation />
          </div>
        </div>
        <Home />
      </header>
    </>
  );
};

export default Header;
