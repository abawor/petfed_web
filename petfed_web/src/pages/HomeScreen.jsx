import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NameEdit from '../components/NameEdit';
import { FaPlus } from "react-icons/fa6";


function HomeScreen() {
    const [name, setName] = useState('');
    const [editName, setEditName] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-xl mb-2">Hello, welcome back</p>
        <NameEdit></NameEdit>
        <Link
          to="/add-new-pet"
          className="flex justify-center items-center mt-4 h-24 w-24 py-3 bg-white text-slate-500 rounded-full border-solid border-4 border-slate-500"
        >
          <FaPlus size={50}/>
        </Link>
      </div>
    );
  }

export default HomeScreen;
