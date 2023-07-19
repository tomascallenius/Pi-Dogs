import imgPrev from "../../img/icons/prev.png";
import imgNext from "../../img/icons/next.png";
import style from "./Paginated.module.css";

const Paginated = ({
  currentPage,
  currentPageSet,
  postPerPage,
  totalPosts,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(currentPage);
  return (
    <div className={style.divAll}>
      <button
        onClick={() => currentPageSet(currentPage > 1 ? currentPage - 1 : 1)}
        className={style.buttonsPaginated}
      >
        <img src={imgPrev} alt="" className={style.img} />
      </button>

      {pageNumbers?.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => currentPageSet(pageNum)}
          className={currentPage === pageNum ? style.focusOn : style.focusOff}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() =>
          currentPageSet(
            currentPage >= 1 && currentPage < pageNumbers.length
              ? currentPage + 1
              : pageNumbers.length
          )
        }
        className={style.buttonsPaginated}
      >
        <img src={imgNext} alt="" className={style.img} />
      </button>
    </div>
  );
};
export default Paginated;
