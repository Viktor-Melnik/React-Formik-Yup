import ProductList from "../components/productList";

import { useSelector } from "react-redux";

export function Home() {
  let { error, loaded } = useSelector((state) => state.products);

  return (
    <>
      <main className="main">
        <section className="main__container">
          {error ? <p className="main__text">Loading error!</p> : null}
          {!error && !loaded ? <p className="main__text">Loading...</p> : null}
          {!error && loaded ? <ProductList /> : null}
        </section>
      </main>
    </>
  );
}
