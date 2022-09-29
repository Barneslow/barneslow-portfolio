import OutlineButton from "../ui/Buttons/OutlineButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

import styles from "./Collab.module.css";
import LetsChat from "./LetsChat";

const Collab = () => {
  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <div className={styles["text-container"]}>
          <h1>Interested in collaborating with me?</h1>
          <p>
            I'm always open to discussing product design work or partnership
            opportunities.
          </p>
        </div>
        <OutlineButton className={styles.flex}>
          Lets open a dialogue!
          <FontAwesomeIcon icon={faComments} style={{ fontSize: 30 }} />
        </OutlineButton>
      </div>
      <LetsChat />
    </section>
  );
};

export default Collab;
