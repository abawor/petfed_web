import React, { useContext } from 'react';
import { PetContext } from './PetContext';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineDeleteForever } from "react-icons/md";
import Toggle from 'react-toggle'
import 'react-toggle/style.css';


export default function ScheduleList() {
    const { pets, setPets } = useContext(PetContext);

    
    const handleToggle = (petId, scheduleId) => {
        const updatedPets = pets.map((pet) => {
          if (pet.id === petId) {
            return {
              ...pet,
              schedules: pet.schedules.map((schedule) => {
                if (schedule.id === scheduleId) {
                  return {
                    ...schedule,
                    reminder: !schedule.reminder,
                  };
                }
                return schedule;
              }),
            };
          }
          return pet;
        });
    
        setPets(updatedPets);
    };

    
    const handleDelete = (petId, scheduleId) => {
      if(!confirm("Are you sure?\nYou will not be able to undo this action")) {
        return
      }

      const updatedPetsList = pets.map(pet => {
        if (pet.id === petId) {
          return {
            ...pet,
            schedules: pet.schedules.filter(
              schedule => schedule.id !== scheduleId
            )
          }
        }
        return pet
      })
      
      setPets(updatedPetsList)
    };
    


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
                            <li
                                key={ schedule.id }
                                className="pl-1 text-start aspect-square rounded-lg border-solid border-4 border-slate-500"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="font-bold text-xl truncate">{pet.name}</p>
                                    <MdOutlineDeleteForever
                                        size={50}
                                        onClick={() => handleDelete(pet.id, schedule.id)}
                                    />
                                </div>
                                <p className="font-bold text-lg truncate">{schedule.name}</p>
                                <p className="font-semibold truncate">{schedule.days.join(', ')}</p>
                                <p>{schedule.time}</p>
                                <div className="flex items-center justify-end">
                                    <p className="text-xs mr-1">Reminder</p>
                                    <Toggle
                                        className="float-right mr-1"
                                        checked={schedule.reminder}
                                        onChange={() => handleToggle(pet.id, schedule.id)}
                                    />
                                </div>
                            </li>
                        )
                    })
                )
            })}

        </ul>
    )
}
