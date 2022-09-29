import "./App.css";
import Collab from "./components/Collab/Collab";
import Description from "./components/Hero/Description";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Layout/Footer/Footer";
import NavBar from "./components/Layout/Navigation/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Hero />
        <Description />
        <Skills />
        <Projects />
        <Collab />
      </main>
      <Footer />
    </div>
  );
}

export default App;
