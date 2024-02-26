import { useState } from "react";
import { FilterParams } from "../../types/products";
import { useGetIdsByFilterQuery } from "../../store/api/valantis";
import { LOAD_LIMIT, VISIBLE_LIMIT } from "../../constants";
import Pagination from "../Pagination/Pagination";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

type ProductsFetcherByFilterProps = {
  filter: FilterParams;
};

const ProductsFetcherByFilter: React.FC<ProductsFetcherByFilterProps> = ({ filter }) => {
  const [offset, setOffset] = useState(0);
  const [isProductsFetching, setProductsFetching] = useState(true);
  const { data } = useGetIdsByFilterQuery(filter);

  return (
    <>
      <ProductsContainer
        productIds={data?.result ? data.result.slice(offset, offset + LOAD_LIMIT) : []}
        isProductsFetching={isProductsFetching}
        setProductsFetching={setProductsFetching}
      />
      <Pagination
        isFinish={!data || data.result.length - offset < VISIBLE_LIMIT}
        isLoading={isProductsFetching}
        setOffset={setOffset}
      />
    </>
  );
};

export default ProductsFetcherByFilter;
