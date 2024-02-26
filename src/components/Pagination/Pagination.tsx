import { useState } from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRigth";
import css from "./Pagination.module.css";
import { VISIBLE_LIMIT } from "../../constants";

type PaginationProps = {
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  isFinish: boolean;
  isLoading: boolean;
};

const Pagination: React.FC<PaginationProps> = ({ isFinish, isLoading, setOffset }) => {
  const [page, setPage] = useState(1);

  const toNextPage = () => {
    setPage((value) => value + 1);
    setOffset((value) => value + VISIBLE_LIMIT);
  };

  const toPrevPage = () => {
    setPage((value) => value - 1);
    setOffset((value) => value - VISIBLE_LIMIT);
  };

  return (
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
};

export default Pagination;
