import "./MEISolutions.css";

function MEISolutions() {
  return (
    <div id="mei-solutions" className="flex items-center flex-row flex-wrap justify-evenly h-screen">
      <div className="relative">
        <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">Economia de Tempo</p>
          </div>
        </div>
      </div>
      <div className="text-left max-w-md">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold leading-tight">
            Feito para MEI
          </h2>
        </div>
        <p className="text-lg leading-relaxed mb-6">
          Software simples, moderno e intuitivo para quem não tem tempo de ficar postando. 
          Somos um agilizador de tempo para microempreendedores que precisam focar no 
          que realmente importa: fazer o negócio crescer.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-lg">Interface intuitiva e fácil de usar</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-lg">Configuração em poucos minutos</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-lg">Mais tempo para o seu negócio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MEISolutions;