import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header";
import { Cart, Favorites, Home } from "./pages";
import Modal from "./components/modal";

import { getProductsAsync } from "./redux/actions/products";
import { closeModal } from "./redux/actions/modal";

function App() {
  const dispatch = useDispatch();
  const { isModalOpen, data } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  return (
    <>
      <Header title="React Clothes Shop" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {isModalOpen ? (
        <Modal
          header={data.header}
          text={data.text}
          closeButton={data.closeButton}
          actions={data.actions}
          closeModal={() =>
            function () {
              dispatch(closeModal());
            }
          }
        />
      ) : null}
    </>
  );
}

export default App;
