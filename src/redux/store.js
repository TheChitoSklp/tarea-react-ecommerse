import { createStore, combineReducers } from "redux";
import cartReducer from "../redux/reducers/cartRedurcer";
import productsReducer from "./reducers/productsReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
