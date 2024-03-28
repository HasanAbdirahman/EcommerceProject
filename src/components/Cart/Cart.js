import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { fetchData } from "../../reducers/cartReducer";

export default function Cart(props) {
  // Select products and fetchedData directly from the Redux store
  const products = useSelector((state) => state.productAdded.products);
  // const fetchedData = useSelector((state) => state.allproducts.products);
  // console.log(fetchedData);
  // Compute dataReturned based on products and fetchedData
  // const dataReturned =
  //   fetchedData && fetchedData.length > 0
  //     ? fetchedData.map((product) => ({
  //         title: product.title,
  //         id: product.id,
  //         quantity: product.quantity,
  //         total: product.totalPrice,
  //         price: product.price,
  //       }))
  //     : products.map((product) => ({
  //         title: product.title,
  //         id: product.id,
  //         quantity: product.quantity,
  //         total: product.totalPrice,
  //         price: product.price,
  //       }));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.map((item) => (
          <CartItem
            key={item.id}
            item={{
              title: item.title,
              id: item.id,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
}
