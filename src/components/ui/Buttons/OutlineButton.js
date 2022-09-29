import styles from "./Buttons.module.css";

const OutlineButton = ({ children, icon, color, className, url }) => {
  console.log(url);
  function clickHandler() {
    window.location.href = url;
  }
  return (
    <button
      hre
      className={`${styles["button-outline"]} ${className}`}
      onClick={clickHandler}
    >
      {children}
      <i className={`${icon} ${color}`}></i>
    </button>
  );
};

export default OutlineButton;
