import React, { useContext } from 'react';
import { ScheduleContext } from './ScheduleContext';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function ScheduleList() {
    const { schedule } = useContext(ScheduleContext);

    return (
        <ul className="grid grid-cols-3 gap-4">
            <Link
                to="/add-new-schedule"
                className="aspect-square flex justify-center items-center text-teal-500 bg-teal-100 text-slate-500 rounded-lg border-solid border-4 border-teal-500"
            >
                <FaPlus size={75}/>
            </Link>

            {schedule.map((item) => {
                return (
                    <li key={ item.id } className="pl-1 text-start aspect-square rounded-lg border-solid border-4 border-slate-500">
                        <p className="font-bold text-2xl">{item.name}</p>
                        <p className="font-semibold line-clamp-1">{item.days}</p>
                        <p className="">{item.quantity} {item.time}</p>
                    </li>
                )
            })}

        </ul>
    )
}
