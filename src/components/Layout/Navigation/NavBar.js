import styles from "./NavBar.module.css";
import IconButton from "../../ui/Buttons/IconButton";
import Logo from "../Logo";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Logo color={"white"} stroke={"var(--purple)"} />
        <IconButton icon={"hand paper outline icon"} color={"var(--purple)"}>
          Say Hello
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;
