import React, { createContext, useState } from 'react';

const poppy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3tRT5GJq9zbaK3-zMQIRMoqNkYqTmoWs2ZA&s"
const robak = "https://deltaaquarium.co.uk/wp-content/uploads/2020/05/Amano_Shrimp-.jpg"

export const PetContext = createContext();

export function PetProvider({ children }) {
    const [pets, setPets] = useState([
        { id: '2', photo: poppy , name: 'Poppy'},
        { id: '3', photo: robak , name: 'Robak'},
    ])

    return (
        <PetContext.Provider value={{ pets, setPets }}>
            {children}
        </PetContext.Provider>
    )
};
