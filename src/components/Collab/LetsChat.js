import IconButton from "../ui/Buttons/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";

import styles from "./LetsChat.module.css";

const LetsChat = () => {
  return (
    <section className={styles.body}>
      <div className={styles.content}>
        <div className={styles.block}>
          <h2 className={styles.title}>Start a project</h2>
        </div>
        <div className={styles.block}>
          <p className={styles.text}>
            Interested in working together? We should queue up a time to chat.
            I'll buy the coffee.
          </p>
        </div>
        <div className={styles.block}>
          <IconButton className={styles.flex}>
            Lets do this!{" "}
            <FontAwesomeIcon
              icon={faHandPeace}
              style={{ paddingLeft: ".5rem" }}
            />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default LetsChat;
