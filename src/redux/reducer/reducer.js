let initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log("action type", action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };

    default:
      return { ...state, count: state.count + 0 };
  }
}

export default reducer;
