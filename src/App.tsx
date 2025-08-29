import Header from "./components/header/Header.tsx";
import Main from "./components/main/Main.tsx";
import Footer from "./components/footer/Footer.tsx";
import { ScrollReveal } from "./components/ScrollReveal.tsx";


function App() {
  return (
    <>
      <body>
        <Header />
        <Main />
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </body>
    </>
  );
}

export default App;
