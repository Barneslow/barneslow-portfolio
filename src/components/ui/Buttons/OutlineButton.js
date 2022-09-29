import styles from "./Buttons.module.css";

const OutlineButton = ({ children, icon, color, className }) => {
  return (
    <button className={`${styles["button-outline"]} ${className}`}>
      {children}
      <i className={`${icon} ${color}`}></i>
    </button>
  );
};

export default OutlineButton;
