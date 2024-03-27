import gameReducer from "../features/GameSlice";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: gameReducer
})