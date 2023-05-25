import "./order_form.scss";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { getLocalStorage } from "../../utils/localStorage/localStorage.js";
import { emptyCart } from "../../redux/actions/cart";
import { orderFormSchema } from "../../schemas";

export default function OrderForm() {
  const { products } = useSelector((state) => state.products);
  const productsInCart = getLocalStorage("Cart");
  const soldProducts = products.filter((product) =>
    productsInCart.includes(product.article)
  );
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      address: "",
      phoneNumber: "",
    },

    validationSchema: orderFormSchema,

    onSubmit: (values) => {
      console.log({
        soldProducts: soldProducts,
        clientInfo: values,
      });

      dispatch(emptyCart("Cart"));
    },
  });

  return (
    <div className="order_form__wrapper">
      <form className="order_form" onSubmit={formik.handleSubmit}>
        <label className="order_form__title" htmlFor="">
          Order Form:
        </label>

        <div className="order_form__input_wrapper">
          <label className="order_form__input_title" htmlFor="firstName">
            First name:
          </label>
          <input
          className="order_form__input"
            type="text"
            placeholder="First name"
            name="firstName"
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <span className="order_form__input_error">
              {formik.errors.firstName}
            </span>
          ) : null}
        </div>

        <div className="order_form__input_wrapper">
          <label className="order_form__input_title" htmlFor="lastName">
            Last name:
          </label>
          <input
          className="order_form__input"
            type="text"
            placeholder="Last name"
            name="lastName"
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <span className="order_form__input_error">
              {formik.errors.lastName}
            </span>
          ) : null}
        </div>

        <div className="order_form__input_wrapper">
          <label className="order_form__input_title" htmlFor="age">
            Age:
          </label>
          <input
          className="order_form__input"
            type="number"
            placeholder="Age"
            name="age"
            value={formik.values.age}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.age && formik.touched.age ? (
            <span className="order_form__input_error">{formik.errors.age}</span>
          ) : null}
        </div>

        <div className="order_form__input_wrapper">
          <label className="order_form__input_title" htmlFor="address">
            Address:
          </label>
          <input
          className="order_form__input"
            type="text"
            placeholder="Address"
            name="address"
            value={formik.values.address}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.address && formik.touched.address ? (
            <span className="order_form__input_error">
              {formik.errors.address}
            </span>
          ) : null}
        </div>

        <div className="order_form__input_wrapper">
          <label className="order_form__input_title" htmlFor="phoneNumber">
            Phone number:
          </label>
          <input
          className="order_form__input"
            type="text"
            placeholder="Phone number"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
            <span className="order_form__input_error">
              {formik.errors.phoneNumber}
            </span>
          ) : null}
        </div>

        <label className="order_form__title">
          Total:{" "}
          <span>
            {soldProducts.reduce((total, item) => total + +item.price, 0)}{" "}
            &euro;
          </span>
        </label>

        <button className="order_form__btn" type="submit">Checkout</button>
      </form>
    </div>
  );
}
