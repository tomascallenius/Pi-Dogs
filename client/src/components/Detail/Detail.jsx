import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDogById(id));
    // return()=> dispatch(cleanDetail());
  }, [id, dispatch]);
  return (
    <div>
      {detail[0] ? (
        <div className={style.divAll}>
          <div>
            <h1 className={style.title}>{detail[0].name}</h1>
            <hr />
          </div>
          <div className={style.divBody}>
            <div>
              <h3 className={style.subTitle}>Heigth</h3>
              <ul>
                Metric: {detail[0].heightMin}-{detail[0].heightMax} cm.
              </ul>
              {/* <hr /> */}
              <h3 className={style.subTitle}>Weigth</h3>
              <ul>
                Metric: {detail[0].weightMin}-{detail[0].weightMax} kg.
              </ul>
              {/* <hr /> */}
              <h3 className={style.subTitle}>Life span</h3>
              <p>{detail[0].life_Span}.</p>
            </div>
            <div>
              <img
                src={detail[0].image}
                alt={detail[0].name}
                className={style.img}
              />
              <p>{detail[0].temperament}.</p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Detail;
