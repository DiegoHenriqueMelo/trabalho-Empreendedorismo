import Home from "./home/Home.tsx";
import AIFeatures from "./ai-features/AIFeatures.tsx";
import MEISolutions from "./mei-solutions/MEISolutions.tsx";
import N8NAutomation from "./n8n-automation/N8NAutomation.tsx";
import Form from "./form/Form.tsx";
import About from "./about/About.tsx";
// import Declarations from "./declarations/Declarations.tsx";
import { ScrollReveal } from "../ScrollReveal.tsx";
import "./Main.css";    

export default function Main() {
  return (
    <>
      <main>
        <Home />
        <ScrollReveal delay={100}>
          <AIFeatures />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <MEISolutions />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <N8NAutomation />
        </ScrollReveal>
        <ScrollReveal delay={250}>
          <Form />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <About />
        </ScrollReveal>
        {/* <ScrollReveal delay={350}>
          <Declarations />
        </ScrollReveal> */}
      </main>
    </>
  );
}
