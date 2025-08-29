import "./Header.css";
import Navbar from "./Navbar.tsx";

function Header() {
  return (
    <>
      <header className="flex items-center flex-row flex-wrap justify-evenly p-4 bg-gray-300">
        <h1 className="text-4xl">Nome da Empresa</h1>
        <Navbar />
      </header>
    </>
  );
}

export default Header;
