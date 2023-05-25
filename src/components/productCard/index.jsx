import "./product_card.scss";
import { StarCard } from "../icons";
import Button from "../button";
import { modalButtons } from "../button/buttons_array";
import { modalWindowDeclarations } from "../modal/modals_array";

import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cart";
import { addFavorite, removeFavorite } from "../../redux/actions/favorites";
import { closeModal, openModal } from "../../redux/actions/modal";

import PropTypes from "prop-types";

export default function ProductCard(props) {
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    props.isFavorite 
    ? dispatch(removeFavorite(props.article))
    : dispatch(addFavorite(props.article));
  };

  const renderModal = (data, functionsArr = []) => {
    const { header, text, closeButton } = data;

    const actions = modalButtons.map((action) => (
      <Button
        backgroundColor={action.backgroundColor}
        text={action.text}
        key={action.id}
        onClick={() => functionsArr[action.id]}
      />
    ));

    dispatch(openModal({ header, text, closeButton, actions }));
  };

  return (
    <>
      <li id={props.id} className="products__card">
        <img src={props.imageUrl} alt={props.name} />

        <div className="products__name_container">
          <h2>{props.name}</h2>
          <StarCard
            article={props.article}
            isFill={props.isFavorite}
            onClick={toggleFavorite}
          />
        </div>

        <div className="products__description_container">
          <p className="products__text"><span className="products__bold_text">Article: </span>{props.article}</p>
          <p className="products__text"><span className="products__bold_text">Color: </span>{props.color}</p>
        </div>

        <div className="products__price_container">
          <p className="products__text products__bold_text">&euro; {props.price}</p>
          {props.inCart ? (
            <Button
              backgroundColor="black"
              text="Remove from cart"
              onClick={() => function () {
                  renderModal(modalWindowDeclarations[1], [
                    function () {
                      dispatch(closeModal());
                    },
                    function () {
                      dispatch(closeModal());
                      dispatch(removeFromCart(props.article));
                    },
                  ]);
                }}
            />
          ) : (
            <Button
              backgroundColor="white"
              text="Add to cart"
              onClick={() => function () {
                  renderModal(modalWindowDeclarations[0], [
                    function () {
                      dispatch(closeModal());
                    },
                    function () {
                      dispatch(closeModal());
                      dispatch(addToCart(props.article));
                    },
                  ]);
                }}
            />
          )}
        </div>
      </li>
    </>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  article: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.number,

  isFavorite: PropTypes.bool,
  inCart: PropTypes.bool,
};

ProductCard.defaultProps = {
  isFavorite: false,
  inCart: false,
};