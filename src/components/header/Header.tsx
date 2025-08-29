import { useState, useEffect } from "react";
import "./Header.css";
import Navbar from "./Navbar.tsx";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center flex-row flex-wrap justify-evenly p-4 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-80' : 'bg-gray-300'
      }`}>
        <h1 className="text-4xl">Nome da Empresa</h1>
        <Navbar />
      </header>
    </>
  );
}

export default Header;
