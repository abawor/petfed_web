import React, { useContext } from 'react';
import { PetContext } from './PetContext';


export default function PetList() {
    const { pets } = useContext(PetContext);

    return (
        <ul style={styles.container}>
            {pets.map((item) => {
                return (
                    <li style={styles.petTile}>
                        <img src={ item.photo } style={styles.petPhoto}/>
                        <p>{item.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'horizontal',
    },
    petTile: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    petPhoto: {
        backgroundColor: '#f0f0f0',
        width: 200,
        height: 200,
        borderRadius: 100,
    },
};
