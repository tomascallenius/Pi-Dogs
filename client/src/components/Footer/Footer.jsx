import style from "./Footer.module.css";
import imgLinkedIn from "../../img/icons/linkedin.png";
import imgGitHub from "../../img/icons/github.png";
import imgGmail from "../../img/icons/instagram.png";

const Footer = () => {
  return (
    <div className={style.divFooter}>
      <h2 className={style.me}>This was made by Tomas Callenius</h2>
      <div className={style.divInfo}>
        <p>If you want to know me, go here →</p>
        <a
          href="https://www.linkedin.com/in/tomas-callenius-9a9149219/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={imgLinkedIn} alt="LinkedIn" className={style.icons} />
        </a>
        <a
          href="https://github.com/tomascallenius"
          target="_blank"
          rel="noreferrer"
        >
          <img src={imgGitHub} alt="GitHub" className={style.icons} />
        </a>
        <a
          href="https://www.instagram.com/tomascallenius/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={imgGmail} alt="Mail" className={style.icons} />
        </a>
        <p> ←</p>
      </div>
    </div>
  );
};

export default Footer;
