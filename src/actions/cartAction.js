import { showNotificationAction } from "./uiAction";

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
        "https://ecommerce-f0912-default-rtdb.firebaseio.com/cart.json",
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

// export const fetchAllData = () => {
//   return async (dispatch) => {
//     dispatch({ type: "FETCH_ALL_DATA" });
//     try {
//       // get all the products from database
//       let response = await fetch(
//         "https://ecommerce-f0912-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "GET",
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Error occured fetching all data");
//       }
//       let responseData = await response.json();

//       // Convert responseData object into an array with one object
//       const productArray = [responseData];

//       // Calculate the total quantity
//       const totalQuantity = Object.keys(responseData).length;
//       console.log([responseData]);

//       dispatch({
//         type: "SUCCESS_FETCHING",
//         payload: {
//           productArray,
//           totalQuantity,
//         },
//       });
//     } catch (error) {
//       dispatch(
//         showNotificationAction({
//           status: "error",
//           title: "Error!!",
//           message: "Retrieving cart data failed..",
//         })
//       );
//     }
//   };
// };
