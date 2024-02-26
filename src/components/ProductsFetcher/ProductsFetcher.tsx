import { useState } from "react";
import { useGetIdsQuery } from "../../store/api/valantis";
import { LOAD_LIMIT, VISIBLE_LIMIT } from "../../constants";
import Pagination from "../Pagination/Pagination";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

const ProductsFetcher: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [isProductsFetching, setProductsFetching] = useState(true);
  const { data } = useGetIdsQuery({ limit: LOAD_LIMIT, offset });

  return (
    <>
      <ProductsContainer
        productIds={data?.result ? data.result : []}
        isProductsFetching={isProductsFetching}
        setProductsFetching={setProductsFetching}
      />
      <Pagination
        isLoading={isProductsFetching}
        isFinish={!!data && data.result.length < VISIBLE_LIMIT}
        setOffset={setOffset}
      />
    </>
  );
};

export default ProductsFetcher;
