import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PetContext } from '../components/PetContext';
import { MdOutlineAddAPhoto } from "react-icons/md";



export default function AddNewPet() {
  const { setPets } = useContext(PetContext);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    if (!name) {
      alert('Name is required!');
      return;
    }

    const newPet = {
      id: (Math.random() * 10000).toFixed(0),
      name: name,
      photo: photo,
    };

    setPets((prevPets) => [...prevPets, newPet]);

    navigate("/");
  };

  return (
    <div className="flex flex-col p-8 items-center">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Add New Pet</h1>

      {/* Photo Upload */}
      <div className="relative mb-4 teal-400">
        {!photo ? (
            <MdOutlineAddAPhoto size={250} />
          ) :
          (
            <div className="flex w-32 h-32 overflow-hidden rounded-full">
              <img
                src={photo}
                className="object-cover h-full w-full"
              />
            </div>
          )
      }
        <input
          type="file"
          onChange={(event) => setPhoto(URL.createObjectURL(event.target.files[0]))}
          className="mb-4 p-2 w-4/5 border border-slate-500 rounded-md absolute inset-0 opacity-0"
        />
        <p className="text-slate-500">(Optional)</p>
      </div>
      
      {/* Form */}
      <div className="w-3/5">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 w-full border border-slate-500 rounded-md"
        />
        {/* DOB 
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="mb-4 p-2 border border-slate-500 rounded-md"
        />
        */}
        <br/>
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
