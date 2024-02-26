import { useGetItemsQuery } from "../../store/api/valantis";
import ProductCard from "../ProductCard/ProductCard";
import ProductsLoader from "../ProductsLoader/ProductsLoader";
import css from "./ProductsContainer.module.css";

type ProductsContainerProps = {
  ids: string[];
  isIdsLoading: boolean;
};

const ProductsContainer: React.FC<ProductsContainerProps> = ({ ids, isIdsLoading }) => {
  const { data, isLoading, isFetching } = useGetItemsQuery({ ids });
  const isData = data && data.result.length > 0;

  if (isIdsLoading || isLoading || isFetching) {
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
