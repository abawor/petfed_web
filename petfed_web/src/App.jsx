import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import AddNewPet from './pages/AddNewPet';
import { PetProvider } from './components/PetContext';
import MealsScreen from './pages/MealsScreen';
import { MealsProvider } from './components/MealsContext';
import { IoHomeOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdSchedule } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import './App.css'


function App() {
  return (
    <PetProvider>
      <MealsProvider>
        <Router>
          <div className="flex flex-col h-screen justify-between">
        
            {/* Routes for the app */}
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/add-new-pet" element={<AddNewPet />} />
              <Route path="/meals" element={<MealsScreen />} />
            </Routes>

            {/* Navigation Bar */}
            <nav className="flex justify-around p-4 bg-gray-100">
              <Link to="/" className="text-lg">
                <IoHomeOutline size={55} className=" mx-auto"/>
                Home
              </Link>
              <Link to="/meals" className="text-lg">
                <IoFastFoodOutline size={55} className=" mx-auto"/>
                Meals
              </Link>
              <Link to="/" className="text-lg">
                <MdSchedule size={55} className=" mx-auto"/>
                Schedule
              </Link>
              <Link to="/" className="text-lg">
                <IoSettingsOutline size={55} className=" mx-auto"/>
                Settings
              </Link>
            </nav>
          </div>
        </Router>
      </MealsProvider>
    </PetProvider>
  );
}

export default App
