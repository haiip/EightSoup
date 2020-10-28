import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Text } from "react-native";

import productsReducer from "./Store/reducers/products";
// import ShopNavigator from "./navigation/ShopNavigator";
// import App from "App";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function AppStore() {
  return (
    <Provider store={store}>
      <Text>Hej</Text>
    </Provider>
  );
}
