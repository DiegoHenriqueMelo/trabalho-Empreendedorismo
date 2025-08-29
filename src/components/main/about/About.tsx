import "../about/About.css";

function About() {
  return (
    <>
      <div id="about" className="flex items-center flex-row flex-wrap justify-evenly h-screen">
        <div className="text-left max-w-md">
          <h2 className="text-3xl font-bold mb-4 leading-tight">
            Nosso objetivo é simplificar sua presença digital.
          </h2>
          <p className="text-lg leading-relaxed">
            Com poucos cliques, você organiza seu feed, define horários
            estratégicos e garante consistência visual sem esforço. O sistema
            cuida da automação: publica, substitui posts antigos e mantém tudo
            dentro do estilo que você escolheu. Assim, sua marca ou perfil
            cresce com organização, impacto e autenticidade.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
