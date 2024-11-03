// AddNewPet.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewPet() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    if (!name) {
      alert('Name is required!');
      return;
    }
    alert(`Pet ${name} added!`);
    navigate('/');
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Add New Pet</h1>
      <form className="flex flex-col items-center">
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
        <button
          type="button"
          onClick={handleSave}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default AddNewPet;
