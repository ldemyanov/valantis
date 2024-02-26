import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRigth";
import css from "./Pagination.module.css";

type PaginationProps = {
  isFinish: boolean;
  isLoading: boolean;
  page: number;
  toNextPage: () => void;
  toPrevPage: () => void;
};

const Pagination: React.FC<PaginationProps> = ({ isFinish, page, toNextPage, toPrevPage, isLoading }) => (
  <div className={css.pagination}>
    <button className={css.button} onClick={toPrevPage} disabled={page === 1 || isLoading}>
      <ArrowLeft className={css.arrow} />
    </button>
    {isLoading ? <div className={css.loader}></div> : <span className={css.number}>{page}</span>}
    <button className={css.button} onClick={toNextPage} disabled={isFinish || isLoading}>
      <ArrowRight className={css.arrow} />
    </button>
  </div>
);

export default Pagination;
