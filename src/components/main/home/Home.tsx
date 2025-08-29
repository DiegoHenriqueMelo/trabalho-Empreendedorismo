import "./Home.css";

function Home() {
  return (
    <>
      <div
        id="home"
        className="flex items-center justify-end h-screen px-8 md:px-16"
      >
        <div className="text-right max-w-lg">
          <h2 className="text-3xl font-bold mb-4 leading-tight">
            Automatize seu feed. Organize seu estilo. Cresça com consistência
          </h2>
          <p className="text-lg leading-relaxed">
            Agende publicações, mantenha seu perfil sempre limpo e alinhado à
            sua identidade visual. Mais tempo para criar, menos preocupação em
            postar.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
