import { CardInterface } from "../types";
import styles from "./Card.module.css";

const Card = ({ title, subtitle, image, width, height }: CardInterface) => {
  return (
    <div className={`${styles.card} bg-dark-blue h-fit rounded-md relative`}>
      <div className=" ">
        {image && (
          <img
            src={image}
            alt=""
            className={`${styles.image}  ${width} ${height} z-[-1] rounded-t-md object-top `}
          />
        )}
      </div>
      <div className={`${width} z-10 p-4 text-white`}>
        <h3
          className={`${styles.title} uppercase text-xl font-Open-Sans font-extrabold`}
        >
          {title}
        </h3>
        {subtitle && (
          <small
            className={`${styles.subtitle} uppercase font-normal font-Open-Sans text-yellow-bright`}
          >
            {subtitle}
          </small>
        )}
      </div>
    </div>
  );
};
export default Card;
