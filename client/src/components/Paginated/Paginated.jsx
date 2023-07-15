import imgPrev from "../../img/icons/prev.png";
import imgNext from "../../img/icons/next.png";
import style from "./Paginated.module.css";

const Paginated = ({ currentPage, postPerPage, toSetCurrentPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.divAll}>
      <button
        onClick={() => toSetCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
        className={style.buttonsPaginated}
      >
        <img src={imgPrev} alt="" className={style.img} />
      </button>
      <button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => toSetCurrentPage(number)}
            className={style.buttonpaginado}
            className={`style.number${number === currentPage ? "Focus" : ""}`}
          >
            {number}
          </button>
        ))}
      </button>
      <button
        onClick={() => toSetCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
        className={style.buttonsPaginated}
      >
        <img src={imgNext} alt="" className={style.img} />
      </button>
    </div>
  );
};
export default Paginated;
