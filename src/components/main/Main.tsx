import Home from "./home/Home.tsx";
import Form from "./form/Form.tsx";
import About from "./about/About.tsx";
import Declarations from "./declarations/Declarations.tsx";
import { ScrollReveal } from "../ScrollReveal.tsx";
import "./Main.css";    

export default function Main() {
  return (
    <>
      <main>
        <Home />
        <ScrollReveal delay={100}>
          <Form />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <Declarations />
        </ScrollReveal>
      </main>
    </>
  );
}
