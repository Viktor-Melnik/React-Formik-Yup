import "./product_list.scss";
import ProductCard from "../productCard";

import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function ProductList(props) {
  let { products } = useSelector((state) => state.products);
  const { productsInCart } = useSelector((state) => state.cart);
  const { productsInFavorites } = useSelector((state) => state.favorites);

  if (props.cart) {
    products = products.filter((product) =>
      productsInCart.includes(product.article)
    );
  }

  if (props.favorites) {
    products = products.filter((product) =>
      productsInFavorites.includes(product.article)
    );
  }

  return (
    <ul className="products__list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          isFavorite={productsInFavorites.includes(product.article)}
          inCart={productsInCart.includes(product.article)}
        />
      ))}
    </ul>
  );
}

ProductList.propTypes = {
  cart: PropTypes.bool,
  favorites: PropTypes.bool,
};

ProductList.defaultProps = {
  cart: false,
  favorites: false,
};
