import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../src/components/UI/Notification";

function App() {
  const show = useSelector((state) => state.toggle.show);
  const dispatch = useDispatch();
  const notification = useSelector(
    (state) => state.showNotification.notification
  );
  // useEffect(() => {
  //   dispatch(fetchAllData());
  // }, [dispatch]);

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
