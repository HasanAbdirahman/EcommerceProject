const initialState = {
  show: false,
  notification: null,
};
export const toggleCartUi = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, show: !state.show };
    default:
      return state;
  }
};

export const showNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        notification: {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        },
      };
    default:
      return state;
  }
};
