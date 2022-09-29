import styles from "./SkillsCard.module.css";

const SkillsCard = ({ children }) => {
  return (
    <section className={styles.card}>
      {children}
      <div className={styles["text-container"]}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.text}>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <h2 className={styles.heading}>Things I enjoy designing:</h2>
        <p className={styles.text}>UX, UI, Web, Apps, Logos</p>
        <h2 className={styles.heading}>Design Tools</h2>
        <ul className={styles.list}>
          <li className={styles.item}>Affinity Designer</li>
          <li className={styles.item}>Affinity Designer</li>
          <li className={styles.item}>Affinity Designer</li>
          <li className={styles.item}>Affinity Designer</li>
          <li className={styles.item}>Affinity Designer</li>
          <li className={styles.item}>Affinity Designer</li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsCard;
