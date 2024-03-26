const initialState = {
  show: false,
};
export const toggleCartUi = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, show: !state.show };
    default:
      return state;
  }
};
