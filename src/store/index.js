import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { addProductReducer, removeProduct } from "../reducers/cartReducer";
import { toggleCartUi, showNotificationReducer } from "../reducers/uiReducer";

const rootReducer = combineReducers({
  productAdded: addProductReducer,
  productRemoved: removeProduct,
  toggle: toggleCartUi,
  showNotification: showNotificationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
