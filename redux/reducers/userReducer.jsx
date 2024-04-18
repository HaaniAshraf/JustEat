const initialState = {
  userDetails: null,
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_USER_DETAILS":
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
  }
  return state;
}

export default userReducer;
