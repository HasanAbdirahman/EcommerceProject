import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showNotificationAction } from "./actions/uiAction";
import Notification from "../src/components/UI/Notification";

let isInital = true;
function App() {
  const show = useSelector((state) => state.toggle.show);
  const cart = useSelector((state) => state.productAdded);
  const notification = useSelector(
    (state) => state.showNotification.notification
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInital) {
      isInital = false;
      return;
    }
    const sendCartData = async () => {
      dispatch(
        showNotificationAction({
          status: "Pending",
          title: "Sending...",
          message: "Sending cart data..",
        })
      );
      let response = await fetch(
        "https://ecommerce-f0912-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
      let responseData = await response.json();
      console.log("hasan" + responseData);
      dispatch(
        showNotificationAction({
          status: "Success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );
    };
    sendCartData().catch((error) => {
      dispatch(
        showNotificationAction({
          status: "error",
          title: "Error!!",
          message: "Sending cart data failed!.",
        })
      );
    });
  }, [cart, dispatch]);
  useEffect(() => {
    if (isInital) {
      isInital = false;
      return;
    }
    const sendCartData = async () => {
      dispatch(
        showNotificationAction({
          status: "Pending",
          title: "Sending...",
          message: "Sending cart data..",
        })
      );
      let response = await fetch(
        "https://ecommerce-f0912-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
      dispatch(
        showNotificationAction({
          status: "Success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );
      // let responseData = await JSON.parse(response);
    };
    sendCartData().catch((error) => {
      dispatch(
        showNotificationAction({
          status: "error",
          title: "Error!!",
          message: "Sending cart data failed!.",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
