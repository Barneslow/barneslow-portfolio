import styles from "./Buttons.module.css";

const IconButton = ({ children, icon, color, className }) => {
  return (
    <button className={`${styles.button} ${className}`}>
      {children}
      <i className={`${icon} ${color}`}></i>
    </button>
  );
};

export default IconButton;
