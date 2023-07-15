import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, name, image, temperament, weightMin, weightMax }) => {
  return (
    <div className={style.divAll}>
      <div>
        <h1 className={style.name}>{name}</h1>
        <hr />
      </div>
      <div className={style.divImg}>
        <img src={image} alt={name} className={style.img} />
        <hr />
      </div>
      <div>
        <p>{temperament}</p>
        <h3>Weigth</h3>
        <p>
          {weightMin}-{weightMax} kg
        </p>
      </div>
      <NavLink to={`/detail/${id}`} className={style.navLink}>
        <p className={style.moreInfoButton}>More of me</p>
      </NavLink>
    </div>
  );
};

export default Card;
