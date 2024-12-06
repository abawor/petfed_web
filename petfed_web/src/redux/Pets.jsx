import { createSlice } from "@reduxjs/toolkit";

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
        deletePet: (state, action) => {
            state.pets = state.pets.filter(pet => pet.id !== action.payload)
        }
    }
});

export const { deletePet }  = petsSlice.actions;

export default petsSlice.reducer;
