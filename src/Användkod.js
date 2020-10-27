import React from "react";
import { View, Text } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./Store/reuducers/products";
import ShopNavigator from "../navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function AppScreen() {
  return (
    <Provider store={store}>
      <View>...</View>
    </Provider>
  );
}
