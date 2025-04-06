import Contact from "./components/contact";
import CV from "./components/cv";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Research from "./components/research";

export default function Home() {
  return (
    <div>
      <div className="text-xl">Dahao Tang</div>
      <div className="pt-5">
        <Contact />
      </div>
      <div className="pt-5">
        <Education />
      </div>
      <div className="pt-5">
        <CV />
      </div>
      <div className="pt-5">
        <Experience />
      </div>
      <div className="pt-5">
        <Research />
      </div>
      <div className="pt-5">
        <Projects />
      </div>
    </div>
  );
}
