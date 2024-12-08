import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const poppy = "https://www.allthingsdogs.com/wp-content/uploads/2019/08/Dapple-Dachshund-Portrait.jpg"
const robak = "https://sevenports.com/wp-content/uploads/aquarium-blog-post-9-1200x900.jpg"

export const petsSlice = createSlice({
    name: "pets",
    initialState: {
        pets: [
            {
                id: '2',
                photo: poppy,
                name: 'Poppy',
                schedules: [
                    {
                        id: 1,
                        name: 'Daily',
                        days: [
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                            'Sunday'
                        ],
                        time: '9:00',
                        reminder: true
                    },
                    {
                        id: 2,
                        name: 'Daily',
                        days: [
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                            'Sunday'
                        ],
                        time: '12:00',
                        reminder: true
                    }
                ],
                feedingLog: []
            },
            {
                id: '3',
                photo: robak,
                name: 'Robak',
                schedules: [
                    {
                        id: 3,
                        name: 'Weekend',
                        days: [
                            'Saturday',
                            'Sunday'
                        ],
                        time: '9:00',
                        reminder: true
                    }
                ],
                feedingLog: []
            }
        ]
    },
    reducers: {
        addNewPet: (state, action) => {
            state.pets.push(action.payload)
        },
        deletePet: (state, action) => {
            state.pets = state.pets.filter(pet => pet.id !== action.payload)
        },
        addSchedule: (state, action) => {
            const petName = action.payload[0].value
            const newSchedule = action.payload[1]

            return produce(state, draft => {
                const pet = draft.pets.find(pet => pet.name === petName)
                pet.schedules.push(newSchedule)
            })

        },
        toggleScheduleNotification: (state, action) => {

        },
        deleteSchedule: (state, action) => {

        }
    }
});

export const {
    addNewPet,
    deletePet,
    addSchedule,
    toggleScheduleNotification,
    deleteSchedule
}  = petsSlice.actions;

export default petsSlice.reducer;
