import "./Navbar.css";

function Navbar() {
  return (
    <>
      <ul className="list-none flex items-center flex-row flex-wrap justify-evenly gap-4">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Sobre</a>
        </li>
        <li>
          <a href="">Declarações</a>
        </li>
        <li>
          <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-gray-500 rounded-md">
            Submit
          </button>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
