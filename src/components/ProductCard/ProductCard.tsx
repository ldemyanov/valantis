import { ProductItem } from "../../types/products";
import css from "./ProductCard.module.css";

type ProductCardProps = {
  product: ProductItem;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={css.product}>
      <div className={css.name}>
        {product.brand && (
          <span className={css.brand}>
            {product.brand}
            <br></br>
          </span>
        )}
        {product.product}
      </div>
      <div className={css.id}>{product.id}</div>
      <div className={css.price}>{product.price} ₽</div>
    </div>
  );
};

export default ProductCard;
