import { getLocalStorageState, setLocalStorageState } from "../storage/local";

export const initialState = {
  basket: getLocalStorageState("basket") || [],
  subtotal: 0,
  hasSucceeded: false,
  isProcessing: false,
  isSuccessful: false,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// reducer how to dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      setLocalStorageState("basket", [...state.basket, action.item]);

      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      setLocalStorageState("basket", []);

      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      setLocalStorageState("basket", newBasket);
      return {
        ...state,
        basket: newBasket,
      };

    case "CHECKOUT_PROCESSING":
      return {
        ...state,
        isProcessing: true,
      };

    case "CHECKOUT_FINISH":
      return {
        ...state,
        isProcessing: false,
      };
    case "CHECKOUT_COMPLETED":
      return {
        ...state,
        isSuccessful: true,
      };
    /*

  isDisabled: true,
  isErrored: false,
  hasSucceeded: false,
  isProcessing: false,

    */
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
