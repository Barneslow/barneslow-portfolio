import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.css";
import { borderColor } from "@mui/system";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <Logo color={"white"} stroke={"var(--dark-purple)"} size={30} />
        <h2 className={styles.title}>
          Living, learning, & leveling up one day at a time.
        </h2>
      </div>
      <div className={styles.social}>
        <FontAwesomeIcon
          icon={faGithub}
          className={`${styles.icon} ${styles.github}`}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className={`${styles.icon} ${styles.facebook}`}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className={`${styles.icon} ${styles.linkedin}`}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          className={`${styles.icon} ${styles.envelope}`}
        />
      </div>
      <h2 className={styles.disclaimer}>Handcrafted by me! Vanilla CSS</h2>
    </footer>
  );
};

export default Footer;
