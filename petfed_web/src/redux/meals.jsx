import { createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase/config";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export const mealsSlice = createSlice({
    name: "meals",
    initialState: {
        meals: [],
        loading: false,
        error: null
    },
    reducers: {
        setMeals: (state, action) => {
            state.meals = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        addMealLocally : (state, action) => {
            state.meals.push(action.payload)
        },
        deleteMealLocally: (state, action) => {
            state.meals = state.meals.filter(meal => meal.id !== action.payload)
        }
    }
});

export const { setMeals, addMealLocally, deleteMealLocally, setLoading, setError }  = mealsSlice.actions;

export const fetchMeals = () => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const mealsCol = collection(db, "meals")
        const mealsSnapshot = await getDocs(mealsCol)
        const meals = mealsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        dispatch(setMeals(meals))
    } catch (error) {
        dispatch(setError(error.message))
    } finally {
        dispatch(setLoading(false))
    }
}

export const addMeal = (meal) => async (dispatch) => {
    try {
        const mealsCol = collection(db, "meals")
        const docRef = await addDoc(mealsCol, meal)
        dispatch(addMealLocally({id: docRef.id, ...meal}))
    } catch (error) {
        dispatch(setError(error.message))
    }
}

export const deleteMeal = (mealId) => async (dispatch) => {
    try {
        const mealDoc = doc(db, "meals", mealId)
        await deleteDoc(mealDoc)
        dispatch(deleteMealLocally(mealId))
    } catch (error) {
        console.log(error)
        dispatch(setError(error.message))
    }
}


export default mealsSlice.reducer;
