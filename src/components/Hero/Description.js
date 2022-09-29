import styles from "./Description.module.css";

const Description = () => {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>Hi, I'm Darrach, nice to meet you!</h2>
        <p className={styles.text}>
          Since beginning my journey as a freelance designer over 11 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time
        </p>
      </div>
    </section>
  );
};

export default Description;
