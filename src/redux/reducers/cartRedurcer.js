const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(
        (item) => item.item_id === action.payload.item_id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.item_id === action.payload.item_id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      const itemToRemove = state.cartItems.find(
        (item) => item.item_id === action.payload
      );
      if (itemToRemove.quantity > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.item_id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.item_id !== action.payload),
        };
      }
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
