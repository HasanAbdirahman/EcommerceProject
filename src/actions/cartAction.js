export const addItemToCart = (newProduct) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: newProduct });

    try {
      dispatch(
        showNotificationAction({
          status: "Pending",
          title: "Sending...",
          message: "Sending cart data..",
        })
      );

      let response = await fetch(
        "https://http-react-8f94b-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(newProduct),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
      let responseData = await response.json();

      dispatch(
        showNotificationAction({
          status: "Success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showNotificationAction({
          status: "error",
          title: "Error!!",
          message: "Sending cart data failed!.",
        })
      );
    }
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: id,
  };
};
