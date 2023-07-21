import style from "./Filter.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sortByName,
  sortByWeight,
  getTemperaments,
  filterByTemps,
  filterBySource,
  getAllDogs,
} from "../../redux/actions";

const Filter = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const [resetFilters, setResetFilters] = useState("");

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleTempSelect = async (event) => {
    await dispatch(getAllDogs());
    setResetFilters(event.target.value);
    dispatch(filterByTemps(event));
  };

  const handleOrderSelect = (event) => {
    setResetFilters(event.target.value);
    if (event.target.value === "1" || event.target.value === "2")
      dispatch(sortByName(event));
    else {
      setResetFilters(event.target.value);
      dispatch(sortByWeight(event));
    }
  };

  const handleSourceSelect = async(event) => {
    await dispatch(getAllDogs());
    dispatch(filterBySource(event));
    setResetFilters(event.target.value);
  };

  const handleReset = () => {
    dispatch(getAllDogs());
    setResetFilters(null);
    
 }
  return (
    <div className={style.divAll}>
      <div className={style.divFilterBy}>
        <h1>Filter by:</h1>
      </div>
      <div className={style.divContainer}>
        <h2>Temps</h2>
        <select
          name="temps"
          id="1"
          onChange={handleTempSelect}
          className={style.select}
        >
          {temperaments?.map((temp) => (
            <option value={temp.name} key={temp.id}>
              {temp.name}
            </option>
          ))}
        </select>
      </div>
      <div className={style.divContainer}>
        <h2>Order</h2>
        <select
          name="order"
          id="2"
          onChange={handleOrderSelect}
          className={style.select}
        >
          <option value="1">Name A-Z</option>
          <option value="2">Name Z-A</option>
          <option value="3">Weight -/+</option>
          <option value="4">Weight +/-</option>
        </select>
      </div>
      <div className={style.divContainer}>
        <h2>Source</h2>
        <select
          name="source"
          id="3"
          onChange={handleSourceSelect}
          className={style.select}
        >
          <option value="DB">DB</option>
          <option value="API">API</option>
        </select>
      </div>
      <div className={style.divReset}>
        <h1 onClick={handleReset}>Reset</h1>
      </div>
      {resetFilters ? (
        <p className={style.pEliminate}>One filter at a time, click on reset.</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Filter;
