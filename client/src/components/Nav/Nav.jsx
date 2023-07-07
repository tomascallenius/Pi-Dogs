import { NavLink, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import style from "./Nav.module.css";
import logoHome from "../../img/logo_home-removebg-preview.png";

const Nav = () => {
  const location = useLocation();
  return (
    <div className={style.containerNav}>
      <NavLink to="/home">
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
