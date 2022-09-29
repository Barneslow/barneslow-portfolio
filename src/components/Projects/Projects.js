import OutlineButton from "../ui/Buttons/OutlineButton";
import Project from "./Project";
import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import data from "../../data/project_data.json";

const Projects = () => {
  return (
    <section className={styles.content}>
      <div className={styles["heading-container"]}>
        <h2 className={styles.title}>My Recent Work</h2>
        <p className={styles.text}>
          Here are a few past design projects I've worked on. Want to see more?
          <a className={styles.link} href="test">
            Email Me!
          </a>
        </p>
      </div>
      <main className={styles.container}>
        {data.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </main>
      <OutlineButton className={styles.flex}>
        Visit My GitHub!
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 30 }} />
      </OutlineButton>
    </section>
  );
};

export default Projects;
