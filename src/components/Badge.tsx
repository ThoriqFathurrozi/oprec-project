import { BadgeInterface } from "../types";
import styles from "./Badge.module.css";

const Badge = ({ text, filled, icon, style }: BadgeInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <div className={`${styles.badge} flex items-center flex-nowrap`}>
      {icon}
      <small className={`${filledClass} font-bold text-3xl ${style} `}>
        {text}
      </small>
    </div>
  );
};
export default Badge;
