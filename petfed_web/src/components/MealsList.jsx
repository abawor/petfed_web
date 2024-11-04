import React, { useContext } from 'react';
import { MealsContext } from './MealsContext';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function MealsList() {
    const { meals } = useContext(MealsContext);

    return (
        <ul className="grid grid-cols-3 gap-4">
            <Link
                to="/"
                className="aspect-square flex justify-center items-center text-slate-500 rounded-lg border-solid border-4 border-slate-500"
            >
                <FaPlus size={50}/>
            </Link>

            {meals.map((item) => {
                return (
                    <li key={ item.id } className="pl-1 text-start aspect-square rounded-lg border-solid border-4 border-slate-500">
                        <p className="font-bold text-2xl">{item.name}</p>
                        <p className="font-semibold">{item.type}</p>
                        <p className="">{item.quantity} {item.unit}</p>
                    </li>
                )
            })}

        </ul>
    )
}
