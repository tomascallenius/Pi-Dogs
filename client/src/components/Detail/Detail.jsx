import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";

const Detail = () => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    dispatch(getDogById(id));
  }, [id, dispatch]);

  return (
    <div>
      {detail.weight ? (
        <>
          <div>
            <h1>{detail.name}</h1>
            <hr />
            <img src={detail.reference_image_id} alt={detail.name} />
            <hr />
            <p>{detail.temperament}</p>
          </div>
          <br />
          <div>
            <h3>Heigth</h3>
            <ul>Metric: {detail.height.metric} cm</ul>
            <ul>Imperial: {detail.height.imperial} plg</ul>
          </div>
          <div>
            <h3>Weigth</h3>
            <ul>Metric: {detail.weight.metric} kg</ul>
            <ul>Imperial: {detail.weight.imperial} lb</ul>
          </div>
          <h3>Life span:</h3>
          <p>{detail.life_span}</p>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Detail;
