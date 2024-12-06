import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./Meals";
import petsReducer from "./Pets";

export default configureStore({
    reducer: {
        meals: mealsReducer,
        pets: petsReducer
    }
});
