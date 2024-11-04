import React, { useContext } from 'react';
import { PetContext } from './PetContext';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function PetList() {
    const { pets } = useContext(PetContext);

    return (
        <ul className="grid grid-cols-3 gap-4">
            <li>
                <Link
                    to="/add-new-pet"
                    className="flex justify-center items-center h-32 w-32 py-3 bg-teal-100 text-teal-500 rounded-full border-solid border-4 border-teal-500"
                >
                    <FaPlus size={75}/>
                </Link>
            </li>
            {pets.map((item) => {
                return (
                    <div>
                        <li className="flex w-32 h-32 overflow-hidden rounded-full" key={ item.id }>
                            <img src={ item.photo } className="object-cover h-full w-full"/>
                        </li>
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </ul>
    )
}
