import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";
import HomeScreen from './pages/HomeScreen';
import MealsScreen from './pages/MealsScreen';
import ScheduleScreen from './pages/ScheduleScreen';
import AddNewMeal from './pages/AddNewMeal';
import AddNewSchedule from './pages/AddNewSchedule';
import AddNewPet from './pages/AddNewPet';
import { SafeAreaView } from 'react-native-web';
import { PetProvider } from './components/PetContext';
import { MealsProvider } from './components/MealsContext';
import { ScheduleProvider } from './components/ScheduleContext';
import { IoHomeOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdSchedule } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import './App.css'


function App() {
  const [navActive, setNavActive] = useState({
    home : true,  
    meals : false,  
    schedule : false,  
    settings : false,  
  })

  return (
    <SafeAreaView className="flex">
      <PetProvider>
        <MealsProvider>
          <ScheduleProvider>
            <Router>
              <div className="flex flex-col h-screen justify-between">
            
                {/* Routes for the app */}
                <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/add-new-pet" element={<AddNewPet />} />
                  <Route path="/meals" element={<MealsScreen />} />
                  <Route path="/add-new-meal" element={<AddNewMeal />} />
                  <Route path="/schedule" element={<ScheduleScreen />} />
                  <Route path="/add-new-schedule" element={<AddNewSchedule />} />
                </Routes>

                {/* Navigation Bar */}
                <nav className="flex justify-around p-4 bg-teal-400">
                  <Link
                    to="/"
                    className={`${navActive.home && "text-black"} text-lg font-bold text-white`}
                    onClick={() => setNavActive({ home: true, meals: false, schedule: false, settings: false })}
                  >
                    <IoHomeOutline size={55} className="mx-auto stroke-0"/>
                    Home
                  </Link>
                  <Link
                    to="/meals"
                    className={`${navActive.meals && "text-black"} text-lg font-bold text-white`}
                    onClick={() => setNavActive({ home: false, meals: true, schedule: false, settings: false })}
                    >
                    <IoFastFoodOutline size={55} className="mx-auto"/>
                    Meals
                  </Link>
                  <Link
                    to="/schedule"
                    className={`${navActive.schedule && "text-black"} text-lg font-bold text-white`}
                    onClick={() => setNavActive({ home: false, meals: false, schedule: true, settings: false })}
                  >
                    <MdSchedule size={55} className="mx-auto"/>
                    Schedule
                  </Link>
                  <Link
                    to="/settings"
                    className={`${navActive.settings && "text-black"} text-lg font-bold text-white`}
                    onClick={() => setNavActive({ home: false, meals: false, schedule: false, settings: true })}
                  >
                    <IoSettingsOutline size={55} className="mx-auto"/>
                    Settings
                  </Link>
                </nav>
              </div>
            </Router>
          </ScheduleProvider>
        </MealsProvider>
      </PetProvider>
    </SafeAreaView>
  );
}

export default App
