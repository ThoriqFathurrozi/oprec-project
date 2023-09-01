import { CardInterface } from "../types";

const Card = ({
  title,
  subtitle,
  image,
  width,
  height,
  style,
  topUp,
}: CardInterface) => {
  return (
    <div className={`${width} ${height} bg-dark-blue rounded-md relative`}>
      <div className={`absolute ${topUp}`}>
        {image && <img src={image} alt="" className={` ${style}`} />}
      </div>
      <div
        className={` relative top-44 ${width} z-10 p-4 text-white text-center`}
      >
        <h3
          className={`text-yellow-bright text-2xl font-Open-Sans font-extrabold`}
        >
          {title}
        </h3>
        {subtitle && (
          <p className={` font-normal text-xs  font-Open-Sans `}>{subtitle}</p>
        )}
      </div>
    </div>
  );
};
export default Card;
