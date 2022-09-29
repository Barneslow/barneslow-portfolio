import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

import styles from "./Logo.module.css";

const Logo = ({ color, stroke, size }) => {
  return (
    <div className={styles.root}>
      <LightbulbCircleIcon
        sx={{
          color: color,
          fontSize: { xs: size ? 80 : 50, sm: 80 },
          stroke: stroke,
          strokeWidth: 0.8,
          "&:hover": {
            cursor: "pointer",
            transform: "scale(.98)",
            opacity: 0.9,
          },
        }}
      />
      {/* <Typography className={styles.text}>
        <h2 className={styles["text-style"]}>BP</h2>
      </Typography> */}
    </div>
  );
};

export default Logo;
