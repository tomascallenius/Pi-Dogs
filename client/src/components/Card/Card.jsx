import { NavLink } from "react-router-dom";

const Card = ({ id, name, image, temperament, weight }) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <hr />
        <img src={image} alt={name} />
        <hr />
        <p>{temperament}</p>
      </div>
      <br />
      <div>
        <h3>Weigth</h3>
        <ul>Metric: {weight.metric} kg</ul>
        <ul>Imperial: {weight.imperial} lb</ul>
      </div>
      <NavLink to={`/detail/${id}`}>
        <button>Detail</button>
      </NavLink>
    </div>
  );
};

export default Card;
