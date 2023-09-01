import { PointInterface } from "../types";
import styles from "./Point.module.css";

export const Point = ({ icon, title, desc, color }: PointInterface) => {
  return (
    <>
      <div
        className={`${styles.Point} p-4 flex flex-col gap-3 items-center text-center w-80 h-64 ${color} `}
      >
        <div className="icons w-16 h-16 ">{icon}</div>
        <h1 className="text-xl font-Open-Sans font-bold">{title}</h1>
        <p className="">{desc}</p>
      </div>
    </>
  );
};

export default Point;
