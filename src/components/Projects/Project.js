import styles from "./Project.module.scss";
import image from "../../images/download.png";
import OutlineButton from "../ui/Buttons/OutlineButton";

const Project = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <img
          className={styles.image}
          src={project.image === "null" ? image : project.image}
        />
        <div className={styles.overlay}>
          <div className={styles["text-container"]}>
            <p className={styles.text}>{project.description}</p>
            <OutlineButton url={project.url}>Visit Site</OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
