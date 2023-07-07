import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/Card";
import { getAllDogs } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { dogs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <div>
      {dogs?.map(({ id, name, reference_image_id, temperament, weight }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            image={reference_image_id}
            temperament={temperament}
            weight={weight}
          />
        );
      })}
    </div>
  );
};

export default Home;
