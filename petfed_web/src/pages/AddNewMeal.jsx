import React, { useState, useContext } from 'react';
import { MealsContext } from '../components/MealsContext';
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function AddNewMeal() {
    const { setMeals } = useContext(MealsContext);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    const navigate = useNavigate();
    const foodTypes = ['Wet', 'Dry', 'Snack', 'Other'];
    const unitTypes = ['grams', 'ounces', 'count', 'other'];

    const handleSave = () => {
        if (!name || !type || !quantity || !unit) {
            alert('All fields are required!');
            return;
        }

        const newMeal = {
            id: (Math.random() * 10000).toFixed(0),
            name: name,
            type: type,
            quantity: quantity,
            unit: unit,
        };

        setMeals((prevMeals) => [...prevMeals, newMeal]);

        navigate('/meals');
    };

    return (
        <div className="flex flex-col p-8 items-center">

            <h1 className="text-3xl font-bold mb-6">Add new meal</h1>

            <div className="w-3/5">

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-4 p-2 w-full border border-slate-500 rounded-md"
                />
                <Dropdown
                    options={foodTypes}
                    onChange={(option) => setType(option.value)}
                    value={""}
                    placeholder="Type"
                    className="mb-4 w-full border border-slate-500 rounded-md"
                />

                <Dropdown
                    options={unitTypes}
                    onChange={(option) => setUnit(option.value)}
                    value={""}
                    placeholder="Unit"
                    className="mb-4 w-full border border-slate-500 rounded-md"
                />

                <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
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
