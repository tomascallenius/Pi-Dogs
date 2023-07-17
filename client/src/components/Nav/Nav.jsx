import { NavLink, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import style from "./Nav.module.css";
import logoHome from "../../img/icons/dog-house.png";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../../redux/actions";

const Nav = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleHome = () => {
    dispatch(getAllDogs()); 
   };
  return (
    <div className={style.containerNav}>
      <NavLink to="/home" onClick={handleHome}>
        <img src={logoHome} alt="toHome" className={style.homeImg} />
      </NavLink>
      <NavLink to="/createDog">
        {location.pathname !== "/createDog" && (
          <button className={style.buttonCreate}>Create a Dog</button>
        )}
      </NavLink>
      <Search />
    </div>
  );
};

export default Nav;
