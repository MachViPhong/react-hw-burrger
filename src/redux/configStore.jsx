import { configureStore } from "@reduxjs/toolkit";
import { BurgerReudcer } from "./reducer/BurgerReducer";

export const store = configureStore({
  reducer: {
    burgerReudcer: BurgerReudcer,
  }
});
