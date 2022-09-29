import OutlineButton from "../ui/Buttons/OutlineButton";
import Project from "./Project";
import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <section className={styles.content}>
      <div className={styles["heading-container"]}>
        <h2>My Recent Work</h2>
        <p>
          Here are a few past design projects I've worked on. Want to see more?
          Email me!
        </p>
      </div>
      <main className={styles.container}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </main>
      <OutlineButton className={styles.flex}>
        Visit My GitHub!
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 30 }} />
      </OutlineButton>
    </section>
  );
};

export default Projects;
