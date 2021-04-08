import { getLocalStorageState, setLocalStorageState } from "../storage/local";

export const initialState = {
  basket: getLocalStorageState("basket") || [],
  subtotal: 0,
  hasSucceeded: false,
  isProcessing: false,
  isSuccessful: false,
  alert: {
    type: null,
    message: null,
    isOpen: false,
  },
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// reducer how to dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const addItemToCart = (cartItems, cartItemToAdd) => {
        const existingCartItem = cartItems.find(
          (cartItem) => cartItem.id === cartItemToAdd.id
        );
        console.log(existingCartItem);
        if (existingCartItem) {
          return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        }

        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
      };
      addItemToCart(state.basket, action.item);
      setLocalStorageState("basket", addItemToCart(state.basket, action.item));

      return {
        ...state,
        basket: addItemToCart(state.basket, action.item),
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

    // open next
    case "OPEN_ALERT":
      let newAlertState = state.alert;
      newAlertState.type = action.payload.type;
      newAlertState.message = action.payload.message;
      newAlertState.isOpen = action.payload.isOpen;
      return {
        ...state,
        ...newAlertState,
      };

    case "CLOSE_ALERT":
      let removeAlertState = state.alert;
      removeAlertState.type = null;
      removeAlertState.message = null;
      removeAlertState.isOpen = action.payload;
      return {
        ...state,
        ...removeAlertState,
      };

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
