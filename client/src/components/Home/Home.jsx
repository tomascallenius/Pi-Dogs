import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getAllDogs } from "../../redux/actions";
import style from "./Home.module.css";
import Paginated from "../Paginated/Paginated";

const Home = () => {
  const dispatch = useDispatch();
  const { dogs } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentDogs = dogs.slice(indexOfFirstPost, indexOfLastPost);
  const currentPageSet = (pageNumber) => setCurrentPage(pageNumber);
  
  const totalPosts = dogs.length;
  
  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <div className={style.divAll}>
      <div className={style.divCard}>
        {currentDogs?.map(
          ({ id, name, image, temperament, weightMin, weightMax }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                image={image}
                temperament={temperament}
                weightMin={weightMin}
                weightMax={weightMax}
              />
            );
          }
        )}
      </div>
      <div>
        <Paginated
          currentPage={currentPage}
          currentPageSet={currentPageSet}
          postPerPage={postPerPage}
          totalPosts={totalPosts}
        />
      </div>
    </div>
  );
};

export default Home;
