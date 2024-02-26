import { useState } from "react";
import { useGetIdsQuery } from "../../store/api/valantis";
import { LOAD_LIMIT, VISIBLE_LIMIT } from "../../store/constants";
import Pagination from "../Pagination/Pagination";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

const ProductsFetcher: React.FC = () => {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isFetching } = useGetIdsQuery({ limit: LOAD_LIMIT, offset });

  const toNextPage = () => {
    setOffset((value) => value + VISIBLE_LIMIT);
    setPage((value) => value + 1);
  };

  const toPrevPage = () => {
    setOffset((value) => value - VISIBLE_LIMIT);
    setPage((value) => value - 1);
  };

  return (
    <>
      <ProductsContainer ids={data?.result ? data.result : []} isIdsLoading={isLoading || isFetching} />
      <Pagination
        isLoading={isLoading || isFetching}
        isFinish={!!data && data.result.length < VISIBLE_LIMIT}
        page={page}
        toNextPage={toNextPage}
        toPrevPage={toPrevPage}
      />
    </>
  );
};

export default ProductsFetcher;
