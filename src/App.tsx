import { ThemeProvider } from './context/ThemeProvider';
import { SVGSprite } from './components/SVGSprite';
import { Nav } from './components/Nav';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Stack } from './components/sections/Stack/Stack';
import { Services } from './components/sections/Services/Services';
import { Experience } from './components/sections/Experience/Experience';
import { Projects } from './components/sections/Projects/Projects';
import { OpenSource } from './components/sections/OpenSource/OpenSource';
import { Education } from './components/sections/Education/Education';
import { Contact } from './components/sections/Contact/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <SVGSprite />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Services />
        <Experience />
        <Projects />
        <OpenSource />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
