import "./Form.css";

function Form() {
  return (
    <>
      <div id="form" className="flex items-center flex-row flex-wrap justify-evenly h-screen" style={{ backgroundColor: "#fff", color: "#000" }}>
        <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors" >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSXwrRp-Gx30zDfHVZVjKD7KROCAuYjyOWWu9XOat2WKPqqg/viewform?usp=header">Quero Experimentar</a>
            </button>
        </div>
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold leading-tight">Dê o próximo passo para um perfil profissional e consistente.</h2>
        </div>
      </div>
    </>
  );
}

export default Form;
