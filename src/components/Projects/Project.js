import styles from "./Project.module.scss";
import image from "../../images/download.png";
import OutlineButton from "../ui/Buttons/OutlineButton";

const Project = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <img className={styles.image} src={image} />
        <div className={styles.overlay}>
          <div className={styles["text-container"]}>
            <p className={styles.text}>
              High-end, custom residential renovaters serving Fraser Valley
              homeowners.
            </p>
            <OutlineButton>Visit Site</OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
