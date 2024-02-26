import { useEffect } from "react";
import { useGetItemsQuery } from "../../store/api/valantis";
import ProductCard from "../ProductCard/ProductCard";
import ProductsLoader from "../ProductsLoader/ProductsLoader";
import css from "./ProductsContainer.module.css";

type ProductsContainerProps = {
  setProductsFetching: (isFetching: boolean) => void;
  productIds: string[];
  isProductsFetching: boolean;
};

const ProductsContainer: React.FC<ProductsContainerProps> = (props) => {
  const { isProductsFetching, productIds, setProductsFetching } = props;

  const { data, isFetching } = useGetItemsQuery({ ids: productIds });
  const isData = data && data.result.length > 0;

  useEffect(() => {
    setProductsFetching(isFetching);
  }, [isFetching, setProductsFetching]);

  if (isProductsFetching) {
    return <ProductsLoader />;
  }

  return (
    <div className={css.container}>
      {isData && data.result.map((product) => <ProductCard product={product} key={product.id} />)}
      {!isData && <div className={css.empty}>Ничего не найдено</div>}
    </div>
  );
};

export default ProductsContainer;
