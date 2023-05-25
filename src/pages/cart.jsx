import ProductList from "../components/productList";
import OrderForm from "../components/orderForm";

import { useSelector } from "react-redux";

export function Cart() {
  const { productsInCart } = useSelector((state) => state.cart);

  return (
    <>
      <main className="main">
        <section className="main__container">
          {productsInCart.length === 0 ? (
            <p className="main__text">
              There are no selected products in the cart...
            </p>
          ) : (
            <div className="main__cart_wrapper">
              <ProductList cart={true} />
              <OrderForm />
            </div>
          )}
        </section>
      </main>
    </>
  );
}
