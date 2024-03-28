import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../actions/cartAction";
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  function addItemToCartHandler() {
    dispatch(addItemToCart({ title, id, price, quantity, total }));
  }
  function removeItemFromCartHandler() {
    dispatch(removeItemFromCart(id));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
