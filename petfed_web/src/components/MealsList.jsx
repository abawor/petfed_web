import Link from "next/link";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals, deleteMeal } from "../redux/Meals";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDeleteForever } from "react-icons/md";


export default function MealsList() {
    const { meals, loading, error } = useSelector(state => state.meals)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMeals())
    }, [dispatch])

    const handleDelete = (mealId) => {
        if(!confirm("Are you sure?\nYou will not be able to undo this action")) {
            return
        }
        
        dispatch(deleteMeal(mealId))
   }

   if (loading) return <p>Loading meals...</p>
   if (error) return <p>Error: {error}...</p>

    return (
        <ul className="grid grid-cols-3 gap-4">
            <Link
                href="/AddNewMeal"
                className="aspect-square flex justify-center items-center text-teal-500 bg-teal-100 text-slate-500 rounded-lg border-solid border-2 border-teal-500"
            >
                <FaPlus size={35}/>
            </Link>
            {meals !== undefined ? 
            meals.map((meal) => {
                return (
                    <li key={ meal.id } className="pl-1 text-start aspect-square rounded-lg border-solid border-2 border-slate-500">
                        <div className="flex items-top justify-between">
                            <p className="font-bold text-2xl">{meal.name}</p>
                            <div>
                            <MdOutlineDeleteForever
                                size={25}
                                onClick={() => handleDelete(meal.id)}
                                />
                            </div>
                        </div>
                        <p className="font-semibold">{meal.type}</p>
                        <p className="">{meal.quantity} {meal.unit}</p>
                    </li>
                )
            })
            : "" }
        </ul>
    )
}
