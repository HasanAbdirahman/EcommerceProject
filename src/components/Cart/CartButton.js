import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../actions/uiAction";

const CartButton = (props) => {
  const dispatch = useDispatch();
  // const cartQuantity = useSelector(
  //   (state) => state.allProducts.totalQuantity || 0
  // );
  const cartQuantity = useSelector(
    (state) => state.addedProducts.totalQuantity
  );
  function handleToggleClick() {
    dispatch(uiAction());
  }
  return (
    <button className={classes.button} onClick={handleToggleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
