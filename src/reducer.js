export const initialState = {
  basket: [],
};

// state -> state of the application
// action -> trying to add or remove from the basket
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};

export default reducer;
