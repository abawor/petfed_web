import React, { useContext } from 'react';
import { PetContext } from './PetContext';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function PetList() {
    const { pets } = useContext(PetContext);

    return (
        <ul style={styles.container}>
            <li>
                <Link
                    to="/add-new-pet"
                    className="flex justify-center items-center h-24 w-24 py-3 bg-teal-100 text-teal-500 rounded-full border-solid border-4 border-teal-500"
                >
                    <FaPlus size={50}/>
                </Link>
            </li>
            {pets.map((item) => {
                return (
                    <li style={styles.petTile} key={ item.id }>
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
