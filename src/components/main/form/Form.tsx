import "./Form.css";

function Form() {
  return (
    <>
      <div id="form" className="flex items-center flex-col lg:flex-row flex-wrap justify-evenly min-h-screen py-8 px-4" style={{ backgroundColor: "#f8fafc", color: "#1e293b" }}>
        <div className="text-center max-w-md mb-8 lg:mb-0">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">Dê o próximo passo para um perfil profissional e consistente.</h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 mb-8">Junte-se aos empreendedores que já automatizaram seu marketing digital</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8">
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Configuração rápida</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm">Suporte incluído</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg max-w-sm mx-auto">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4">Comece Agora</h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">Teste gratuitamente por 7 dias</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all transform hover:scale-105 w-full">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSXwrRp-Gx30zDfHVZVjKD7KROCAuYjyOWWu9XOat2WKPqqg/viewform?usp=header" className="flex items-center justify-center">
                <span className="text-sm md:text-base">Quero Experimentar</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
