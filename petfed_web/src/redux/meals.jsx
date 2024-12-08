import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
    name: "meals",
    initialState: {
        meals: [
            { id: '1', name: 'Kibble', type: 'Dry', quantity: '50', unit: 'grams' },
            { id: '2', name: 'Fish', type: 'Wet', quantity: '100', unit: 'grams' },
            { id: '3', name: 'Dental chew', type: 'Snack', quantity: '1', unit: 'count' }
        ]
    },
    reducers: {
        addMeal : (state, action) => {
            state.meals.push(action.payload)
        },
        deleteMeal: (state, action) => {
            state.meals = state.meals.filter(meal => meal.id !== action.payload)
        }
    }
});

export const { addMeal, deleteMeal }  = mealsSlice.actions;

export default mealsSlice.reducer;
