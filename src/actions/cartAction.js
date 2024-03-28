export const addItemToCart = (newProduct) => {
  return {
    type: "ADD_TO_CART",
    payload: newProduct,
  };
};
export const removeItemFromCart = (id) => {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: id,
  };
};
