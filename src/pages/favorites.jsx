import ProductList from "../components/productList";

import { useSelector } from "react-redux";

export function Favorites() {
  const { productsInFavorites } = useSelector((state) => state.favorites);

  return (
    <>
      <main className="main">
        <section className="main__container">
          {productsInFavorites.length === 0 ? (
            <p className="main__text">
              There are no selected products in the favorites...
            </p>
          ) : (
            <ProductList favorites={true} />
          )}
        </section>
      </main>
    </>
  );
}
