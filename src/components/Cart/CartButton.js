import classes from "./CartButton.module.css";
import { UseDispatch, useSelector } from "react-redux";
import { uiAction } from "../../actions/uiAction";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.productAdded.)

  function handleToggleClick() {
    dispatch(uiAction());
  }
  return (
    <button className={classes.button} onClick={handleToggleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
