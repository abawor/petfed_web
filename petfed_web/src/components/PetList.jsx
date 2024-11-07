import React, { useContext } from 'react';
import { PetContext } from './PetContext';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function PetList() {
    const { pets } = useContext(PetContext);

    return (
        <ul className="grid grid-cols-3 gap-4">
            <div key={ 1 }>
                <li>
                    <Link
                        to="/add-new-pet"
                        className="flex justify-center items-center h-32 w-32 py-3 bg-teal-100 text-teal-500 rounded-full border-solid border-4 border-teal-500"
                    >
                        <FaPlus size={75}/>
                    </Link>
                </li>
            </div>
            {pets.map((item) => {
                return (
                    <div key={ item.id }>
                        <li className="flex w-32 h-32 overflow-hidden rounded-full">
                            <img src={ item.photo } className="object-cover h-full w-full"/>
                        </li>
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </ul>
    )
}
