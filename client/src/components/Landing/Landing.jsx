import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";
import loginImg from "../../img/loginhome-removebg-preview.png";

const Landing = () => {
  return (
    <div className={style.divPage}>
      <div className={style.divTitle}>
        <h1 className={style.title}>The dog spoT</h1>
      </div>
      <div className={style.divButton}>
        <NavLink to="/home">
          <p className={style.button}>GET IN</p>
          <img src={loginImg} alt="" className={style.login} />
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
