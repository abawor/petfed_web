import React, { useContext } from 'react';
import { MealsContext } from './MealsContext';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineDeleteForever } from "react-icons/md";


export default function MealsList() {
    const { meals, setMeals } = useContext(MealsContext);

    /* Add delete for meals */

    const handleDelete = (mealId) => {
        if(!confirm("Are you sure?\nYou will not be able to undo this action")) {
            return
        }

        const updatedMealsList = meals.
            filter(meal => meal.id != mealId).
            map(meal => {
                return meal
            })

        setMeals(updatedMealsList)
    }

    return (
        <ul className="grid grid-cols-3 gap-4">
            <Link
                to="/add-new-meal"
                className="aspect-square flex justify-center items-center text-teal-500 bg-teal-100 text-slate-500 rounded-lg border-solid border-4 border-teal-500"
            >
                <FaPlus size={75}/>
            </Link>

            {meals.map((meal) => {
                return (
                    <li key={ meal.id } className="pl-1 text-start aspect-square rounded-lg border-solid border-4 border-slate-500">
                        <div className="flex items-top justify-between">
                            <p className="font-bold text-2xl">{meal.name}</p>
                            <div>
                            <MdOutlineDeleteForever
                                size={50}
                                onClick={() => handleDelete(meal.id)}
                                />
                            </div>
                        </div>
                        <p className="font-semibold">{meal.type}</p>
                        <p className="">{meal.quantity} {meal.unit}</p>
                    </li>
                )
            })}

        </ul>
    )
}
