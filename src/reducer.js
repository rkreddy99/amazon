import { Loop } from "@material-ui/icons";

export const initialState = {
  basket: [],
};

// Selector
//  fancy way of writing a for Loop
// iterates through the basket, amount is initialised to zero and adds all price and returns amount
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

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
