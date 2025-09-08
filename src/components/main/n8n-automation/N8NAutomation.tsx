import "./N8NAutomation.css";

function N8NAutomation() {
  return (
    <div
      id="n8n-automation"
      className="flex items-center flex-col lg:flex-row flex-wrap justify-evenly min-h-screen py-8 px-4"
    >
      <div className="text-left max-w-md mb-8 lg:mb-0">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">Automação N8N</h2>
        </div>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Utilizamos a poderosa plataforma N8N para criar fluxos de automação
          personalizados. Conectamos suas redes sociais, ferramentas de design e
          sistemas de gestão em um workflow inteligente e eficiente.
        </p>
        <div className="space-y-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-bold text-white">1</span>
              </div>
              <span className="font-semibold text-black">Conecta suas plataformas</span>
            </div>
            <p className="text-sm text-black text-opacity-90 ml-9">
              Instagram, Facebook, Mercado Livre e mais
            </p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-bold text-white">2</span>
              </div>
              <span className="font-semibold text-black">Automatiza processos</span>
            </div>
            <p className="text-sm text-black text-opacity-90 ml-9">
              Publicação, edição e agendamento
            </p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-xs font-bold text-white">3</span>
              </div>
              <span className="font-semibold text-black">Monitora resultados</span>
            </div>
            <p className="text-sm text-black text-opacity-90 ml-9">
              Relatórios e métricas automáticas
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-400 to-orange-400 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default N8NAutomation;
