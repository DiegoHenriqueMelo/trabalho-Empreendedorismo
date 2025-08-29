import Header from "./components/header/Header.tsx";
import Main from "./components/main/Main.tsx";
import Footer from "./components/footer/Footer.tsx";
import { ScrollReveal } from "./components/ScrollReveal.tsx";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main />
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
