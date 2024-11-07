import React, { useState, useContext } from 'react';
import { ScheduleContext } from '../components/ScheduleContext';
import { useNavigate } from 'react-router-dom';
import 'react-dropdown/style.css';

export default function AddNewMeal() {
    const { setSchedule } = useContext(ScheduleContext);
    const [name, setName] = useState('');
    const [days, setDays] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();

    const handleSave = () => {
        if (!name || !days || !time ) {
            alert('All fields are required!');
            return;
        }

        const newSchedule = {
            id: (Math.random() * 10000).toFixed(0),
            name: name,
            type: type,
            quantity: quantity,
            unit: unit,
        };

        setSchedule((prevSchedule) => [...prevSchedule, newSchedule]);

        navigate('/schedule');
    };

    return (
        <div className="flex flex-col p-8 items-center">

            <h1 className="text-3xl font-bold mb-6">Add new schedule</h1>

            <div className="w-3/5">

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-4 p-2 w-full border border-slate-500 rounded-md"
                />
     
                

                <button
                type="button"
                onClick={handleSave}
                className="py-2 font-bold w-full bg-teal-400 text-white rounded-lg"
                >
                Save
                </button>
            </div>
        </div>
    );
}
