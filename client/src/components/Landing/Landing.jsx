import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";
import imgBanner from "../../img/tiraperrostipofooter-removebg-preview.png";

const Landing = () => {
  return (
    <div className={style.divPage}>
      <div className={style.divTitle}>
        <h1 className={style.title}>The dog club</h1>
      </div>
      <div className={style.divButton}>
        <NavLink to="/home" className={style.navLink}>
          <p className={style.button}>Get in ↑</p>
        </NavLink>
      </div>
      <div>
        <img src={imgBanner} alt="" className={style.imgBanner} />
      </div>
    </div>
  );
};

export default Landing;
