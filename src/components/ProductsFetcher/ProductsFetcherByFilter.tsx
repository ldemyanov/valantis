import { useState } from "react";
import { FilterParams } from "../../types/products";
import { useGetIdsByFilterQuery } from "../../store/api/valantis";
import { LOAD_LIMIT, VISIBLE_LIMIT } from "../../store/constants";
import Pagination from "../Pagination/Pagination";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

type ProductsFetcherByFilterProps = {
  filter: FilterParams;
};

const ProductsFetcherByFilter: React.FC<ProductsFetcherByFilterProps> = ({ filter }) => {
  const [page, setPage] = useState(1);
  const [pageShift, setPageShift] = useState(0);
  const { data, isLoading, isFetching } = useGetIdsByFilterQuery(filter);

  const toNextPage = () => {
    setPage((value) => value + 1);
    setPageShift((value) => value + VISIBLE_LIMIT);
  };

  const toPrevPage = () => {
    setPage((value) => value - 1);
    setPageShift((value) => value - VISIBLE_LIMIT);
  };

  return (
    <>
      <ProductsContainer
        ids={data?.result ? data.result.slice(pageShift, pageShift + LOAD_LIMIT) : []}
        isIdsLoading={isLoading || isFetching}
      />
      <Pagination
        isFinish={!!data && data.result.length - pageShift < 50}
        isLoading={isLoading || isFetching}
        page={page}
        toNextPage={toNextPage}
        toPrevPage={toPrevPage}
      />
    </>
  );
};

export default ProductsFetcherByFilter;
