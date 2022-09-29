import styles from "./Skills.module.css";
import SkillsCard from "./SkillsCard";
import BrushIcon from "@mui/icons-material/Brush";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import PieChartIcon from "@mui/icons-material/PieChart";

const Skills = () => {
  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <div className={styles.card}>
          <BrushIcon
            sx={{
              fontSize: 70,
              backgroundColor: "var(--light-green)",
              borderRadius: "25%",
              padding: 1,
            }}
          />
          <div className={styles["text-container"]}>
            <h1 className={styles.title}>Designer</h1>
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
        </div>

        <div className={styles.card}>
          <ImportantDevicesIcon
            sx={{
              fontSize: 70,
              backgroundColor: "var(--light-green)",
              borderRadius: "25%",
              padding: 1.5,
            }}
          />
          <div className={styles["text-container"]}>
            <h1 className={styles.title}>Frontend Developer</h1>
            <p className={styles.text}>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <h2 className={styles.heading}>Languages I speak:</h2>
            <p className={styles.text}>HTML, Pug, Slim, CSS, Sass, Git</p>
            <h2 className={styles.heading}>Dev Tools:</h2>
            <ul className={styles.list}>
              <li className={styles.item}>Atom</li>
              <li className={styles.item}>Atom</li>
              <li className={styles.item}>Atom</li>
              <li className={styles.item}>Atom</li>
              <li className={styles.item}>Atom</li>
              <li className={styles.item}>Atom</li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <PieChartIcon
            sx={{
              fontSize: 70,
              backgroundColor: "var(--light-green)",
              borderRadius: "25%",
              padding: 1,
            }}
          />
          <div className={styles["text-container"]}>
            <h1 className={styles.title}>Mentor</h1>
            <p className={styles.text}>
              I genuinely care about people, and love helping fellow designers
              work on their craft.
            </p>
            <h2 className={styles.heading}>Experiences I draw from:</h2>
            <p className={styles.text}>UX/UI, Product design, Freelancing</p>
            <h2 className={styles.heading}>Mentor Stats:</h2>
            <ul className={styles.list}>
              <li className={styles.item}>7 years experience</li>
              <li className={styles.item}>7 years experience</li>
              <li className={styles.item}>7 years experience</li>
              <li className={styles.item}>7 years experience</li>
              <li className={styles.item}>7 years experience</li>
              <li className={styles.item}>7 years experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
