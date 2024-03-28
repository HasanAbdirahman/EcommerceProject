import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  addProductReducer,
  fetchData,
  removeProduct,
} from "../reducers/cartReducer";
import { toggleCartUi, showNotificationReducer } from "../reducers/uiReducer";

const rootReducer = combineReducers({
  productAdded: addProductReducer,
  productRemoved: removeProduct,
  toggle: toggleCartUi,
  showNotification: showNotificationReducer,
  // allproducts: fetchData,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
