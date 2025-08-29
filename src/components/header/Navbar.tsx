import "./Navbar.css";

function Navbar() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ul className="list-none flex items-center flex-row flex-wrap justify-evenly gap-4">
        <li>
          <a href="#" onClick={() => scrollToSection('home')} className="cursor-pointer">Home</a>
        </li>
        <li>
          <a href="#" onClick={() => scrollToSection('about')} className="cursor-pointer">Sobre</a>
        </li>
        {/* <li>
          <a href="#" onClick={() => scrollToSection('declarations')} className="cursor-pointer">Declarações</a>
        </li> */}
        <li>
          <button onClick={() => scrollToSection('form')} className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-gray-500 rounded-md cursor-pointer">
            Começe Agora
          </button>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
