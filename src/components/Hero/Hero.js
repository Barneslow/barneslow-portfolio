import styles from "./Hero.module.css";
import avatar from "../../images/pngwing.com.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles["text-container"]}>
        <h1 className={styles.header}>
          Designer, Marketer & Frontend Developer
        </h1>
        <h2 className={styles.title}>
          I love to design beautiful, user-friendly interfaces and code simple,
          helpful projects.
        </h2>
        <h3 className={styles.text}>
          Aspiring developer hoping to make a positive impact on the world
        </h3>
      </div>
      <div className={styles["image-container"]}>
        <img className={styles.image} src={avatar} />
      </div>
    </section>
  );
};

export default Hero;
