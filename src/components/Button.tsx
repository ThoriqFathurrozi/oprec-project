import { ButtonInterface } from "../types";
import styles from "./Button.module.css";

const Button = ({ text, filled, href, icon }: ButtonInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <a
      href={href}
      className={`${styles.btn} ${filledClass} border-2   rounded flex gap-2 items-center font-bold transition-all duration-500 hover:opacity-70  ease-in`}
    >
      <span className="text-inherit">{text}</span>
      {icon}
    </a>
  );
};
export default Button;
