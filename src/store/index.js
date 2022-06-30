import { combineReducers} from "redux";
import { legacy_createStore as createStore } from "redux";
import cartReducer from "./Modules/cart/reducer";
import productsReducer from "./Modules/Products/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(reducers);

export default store