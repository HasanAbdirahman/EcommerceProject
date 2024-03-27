export const uiAction = () => {
  return {
    type: "TOGGLE",
  };
};

export const showNotificationAction = ({ status, message, title }) => {
  return {
    type: "SHOW_NOTIFICATION",
    payload: { status, message, title },
  };
};
