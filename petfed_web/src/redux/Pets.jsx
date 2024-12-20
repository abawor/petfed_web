import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { db } from "../firebase/config";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

const robak = "https://sevenports.com/wp-content/uploads/aquarium-blog-post-9-1200x900.jpg"

export const petsSlice = createSlice({
    name: "pets",
    initialState: {
        pets: [],
        loading: false,
        error: null
    },
    reducers: {
        setPets: (state, action) => {
            state.pets = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        deletePetLocally: (state, action) => {
            state.pets = state.pets.filter(pet => pet.id !== action.payload)
        },
        /*
        addSchedule: (state, action) => {
            const petName = action.payload[0].value
            const newSchedule = action.payload[1]

            return produce(state, draft => {
                const pet = draft.pets.find(pet => pet.name === petName)
                pet.schedules.push(newSchedule)
            })

        },*/
        toggleScheduleNotificationLocally: (state, action) => {
            const petId = action.payload[0]
            const scheduleId = action.payload[1]

            return produce(state, draft => {
                const pet = draft.pets.find(pet => pet.id === petId)
                const schedule = pet.schedules.find(schedule => schedule.id === scheduleId)

                schedule.reminder = !schedule.reminder
            })
        },
        deleteScheduleLocally: (state, action) => {
            const petId = action.payload[0]
            const scheduleId = action.payload[1]

            return produce(state, draft => {
                const pet = draft.pets.find(pet => pet.id === petId)
                pet.schedules = pet.schedules.filter(schedule => schedule.id != scheduleId)
            })
        }
    }
});

export const { setPets, setLoading, setError, deletePetLocally, toggleScheduleNotificationLocally, deleteScheduleLocally } = petsSlice.actions

export const fetchPets = () => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const petsCol = collection(db, "pets")
        const petsSnapshot = await getDocs(petsCol)
        const pets = petsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        dispatch(setPets(pets))
    } catch (error) {
        dispatch(setError(error.message))
    } finally {
        dispatch(setLoading(false))
    }
}

export const deletePet = (petId) => async (dispatch) => {
    try {
        const petDoc = doc(db, "pets", petId)
        await deleteDoc(petDoc)
        dispatch(deletePetLocally(petId))
    } catch (error) {
        dispatch(setError(error.message))
    }
}

export default petsSlice.reducer;
