import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PetContext } from '../components/PetContext';
import { MdOutlineAddAPhoto } from "react-icons/md";



function AddNewPet() {
  const { setPets } = useContext(PetContext);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('');
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
      dob: dob,
      gender: gender,
      type: type,
      breed: breed,
      weight: weight,
      unit: unit,
    };

    setPets((prevPets) => [...prevPets, newPet]);

    alert("Pet added!");
    navigate("/");
  };

  return (
    <div className="flex flex-col p-8 items-center">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Add New Pet</h1>

      {/* Photo Upload */}
      <div className="flex flex-col justify-center items-center relative mb-4">
        <MdOutlineAddAPhoto size={200} />
        <input
          type="file"
          onChange={(event) => setPhoto(URL.createObjectURL(event.target.files[0]))}
          className="mb-4 p-2 w-4/5 border border-gray-300 rounded-md absolute inset-0 opacity-0"
        />
      </div>

      <img src={photo} />

      
      {/* Form */}
      <div>
        <input
          type="text"
          placeholder="Name (required)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 w-4/5 border border-gray-300 rounded-md"
        />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="mb-4 p-2 w-4/5 border border-gray-300 rounded-md"
        />
        <br/>
        <button
          type="button"
          onClick={handleSave}
          className="py-2 w-4/5 bg-blue-500 text-white rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNewPet;
