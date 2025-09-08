import "./AIFeatures.css";

function AIFeatures() {
  return (
    <div id="ai-features" className="flex items-center flex-row flex-wrap justify-evenly h-screen">
      <div className="text-left max-w-md">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold leading-tight">
            IA Generativa Integrada
          </h2>
        </div>
        <p className="text-lg leading-relaxed mb-6">
          Nossa inteligência artificial analisa sua marca e cria posts padronizados 
          automaticamente. Mantém sua identidade visual consistente, sugere textos 
          alinhados ao seu tom de voz e otimiza o engajamento.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
            <span className="text-sm">Padronização automática</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
            <span className="text-sm">Identidade visual</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
            <span className="text-sm">Tom de voz consistente</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
            <span className="text-sm">Otimização de engajamento</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">IA Criativa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIFeatures;