import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NameEdit from '../components/NameEdit';

function HomeScreen() {
    const [name, setName] = useState('');
    const [editName, setEditName] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <p className="text-xl mb-2">Hello, welcome back</p>
        <NameEdit></NameEdit>
        <Link
          to="/add-new-pet"
          className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add New Pet
        </Link>
      </div>
    );
  }

export default HomeScreen;
