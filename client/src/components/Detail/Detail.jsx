import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(detail);
  useEffect(() => {
    console.log(id);
    dispatch(getDogById(id));
  }, [id, dispatch]);

  return (
    <div>
      {detail[0] ? (
        <div className={style.divAll}>
          <div>
            <h1>{detail[0].name}</h1>
            <hr />
            <img
              src={detail[0].image}
              alt={detail[0].name}
              className={style.img}
            />
            <hr />
            <p>{detail[0].temperament}</p>
          </div>
          <br />
          <div>
            <h3>Heigth</h3>
            <ul>
              Metric: {detail[0].heightMin}-{detail[0].heightMax} cm
            </ul>
          </div>
          <div>
            <h3>Weigth</h3>
            <ul>
              Metric: {detail[0].weightMin}-{detail[0].weightMax} kg
            </ul>
          </div>
          <h3>Life span:</h3>
          <p>{detail[0].life_span}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Detail;
