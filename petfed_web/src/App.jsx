import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import AddNewPet from './pages/AddNewPet';
import './App.css'


function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="flex justify-around p-4 bg-gray-100 border-b border-gray-300">
        <Link to="/" className="text-lg text-black">Home</Link>
        <Link to="/" className="text-lg text-black">Meals</Link>
        <Link to="/" className="text-lg text-black">Schedule</Link>
        <Link to="/" className="text-lg text-black">Settings</Link>
      </nav>

      {/* Routes for the app */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/add-new-pet" element={<AddNewPet />} />
      </Routes>
    </Router>
  );
}

export default App
