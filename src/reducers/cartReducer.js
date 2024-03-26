const initialState = {
  products: [],
  totalQuantity: 0,
};

export const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let newProduct = action.payload;
      const productExist = state.products.find(
        (product) => product.id === newProduct.id
      );
      if (productExist) {
        return {
          products: state.products.map((product) =>
            product.id === newProduct.id
              ? {
                  ...product,
                  totalPrice: product.totalPrice + newProduct.price,
                  quantity: product.quantity + 1,
                }
              : product
          ),

          totalQuantity: state.totalQuantity + 1,
          ...state,
        };
      } else {
        return {
          // never do this state.products.push(newProduct) cause u r mutating the state directly
          ...state,
          products: [
            {
              itemId: newProduct.id,
              price: newProduct.price,
              quntity: 1,
              totalPrice: newProduct.price,
              name: newProduct.title,
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
      let productToRemove = state.products.find(
        (product) => product.id === action.payload
      );
      if (!productToRemove) {
        return state; // Product not found, return current state
      }

      if (productToRemove.quantity === 1) {
        return {
          ...state,
          products: (state.products = state.products.filter(
            (product) => product.id === action.payload
          )),
          totalQuantity: state.totalQuantity - 1,
        };
      } else {
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
        };
      }
    default:
      return state;
  }
};
