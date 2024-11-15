import React, { useContext } from 'react';
import { PetContext } from './PetContext';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle'
import 'react-toggle/style.css';


export default function ScheduleList() {
    const { pets, setPets } = useContext(PetContext);

    /*
    const updateToggle = pets.map(pet => {
        return (
            pet.schedules.map((schedule) => {
                if (name === scheduledPet.value) {
                    return {
                        ...pet,
                        schedules: [...pet.schedules, newSchedule]
                    }
                } else {
                    return pet
                }
            })
        )
    })
    */

    return (
        <ul className="grid grid-cols-3 gap-4">
            <Link
                to="/add-new-schedule"
                className="aspect-square flex justify-center items-center text-teal-500 bg-teal-100 text-slate-500 rounded-lg border-solid border-4 border-teal-500"
            >
                <FaPlus size={75}/>
            </Link>

            {pets.map((pet) => {
                return (
                    pet.schedules.map((schedule) => {
                        return (
                            <li key={ schedule.id } className="pl-1 text-start aspect-square rounded-lg border-solid border-4 border-slate-500">
                                <p className="font-bold text-xl truncate">{pet.name}</p>
                                <p className="font-bold text-lg truncate">{schedule.name}</p>
                                <p className="font-semibold truncate">{schedule.days}</p>
                                <p>{schedule.time}</p>
                                <Toggle
                                    className="float-right mr-1"
                                    checked={schedule.reminder}
                                    onChange={setPets(updateToggle)}
                                />
                            </li>
                        )
                    })
                )
            })}

        </ul>
    )
}
