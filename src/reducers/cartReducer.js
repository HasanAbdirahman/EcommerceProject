const initialState = {
  products: [],
  totalQuantity: 0,
};
// DONT PERFORM ASYNC/AWAIT/fetch OR SIDE EFFECT ON THE REDUCERS
export const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let newProduct = action.payload;
      const productExistIndex = state.products.findIndex(
        (product) => product.id === newProduct.id
      );
      if (productExistIndex !== -1) {
        let updatedProducts = [...state.products];
        updatedProducts[productExistIndex] = {
          ...updatedProducts[productExistIndex],
          totalPrice:
            updatedProducts[productExistIndex].totalPrice + newProduct.price,
          quantity: updatedProducts[productExistIndex].quantity + 1,
        };
        return {
          ...state,
          products: updatedProducts,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          // never do this state.products.push(newProduct) cause u r mutating the state directly
          ...state,
          products: [
            ...state.products,
            {
              id: newProduct.id,
              price: newProduct.price,
              quantity: 1,
              totalPrice: newProduct.price,
              title: newProduct.title,
            },
          ],
          totalQuantity: state.totalQuantity + 1,
        };
      }

    default:
      return state;
  }
};

export const removeProduct = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_ITEM_FROM_CART":
      const productToRemoveIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      console.log(productToRemoveIndex);

      if (productToRemoveIndex === -1) {
        return state; // Product not found, return current state
      }

      if (state.products[productToRemoveIndex].quantity === 1) {
        // If quantity is 1, remove the product from the cart
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload
          ),
          totalQuantity: state.totalQuantity - 1,
        };
      } else {
        // If quantity is greater than 1, decrement quantity and update total price
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload
              ? {
                  ...product,
                  quantity: product.quantity - 1,
                  totalPrice: product.totalPrice - product.price,
                }
              : product
          ),
          totalQuantity: state.totalQuantity - 1,
        };
      }
    default:
      return state;
  }
};
