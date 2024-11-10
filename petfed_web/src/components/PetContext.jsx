import React, { createContext, useContext, useState } from 'react';

const poppy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3tRT5GJq9zbaK3-zMQIRMoqNkYqTmoWs2ZA&s"
const robak = "https://deltaaquarium.co.uk/wp-content/uploads/2020/05/Amano_Shrimp-.jpg"

export const PetContext = createContext();

export function PetProvider({ children }) {
    const [pets, setPets] = useState([
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
                    time: '9:00'
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
                    time: '12:00'
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
                    time: '9:00'
                }
            ],
            feedingLog: []
        },
    ])

    return (
        <PetContext.Provider value={{ pets, setPets }}>
            {children}
        </PetContext.Provider>
    )
};
