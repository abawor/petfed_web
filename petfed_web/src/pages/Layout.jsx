import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";
import { SafeAreaView } from 'react-native-web';
import { MdOutlinePets } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdSchedule } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import './Layout.css'


export default function Layout({ children }) {
  const [navActive, setNavActive] = useState({
    home : true,  
    meals : false,  
    schedule : false,  
    settings : false,  
  })

  return (
    <SafeAreaView className="flex">
      <div className="flex flex-col h-screen justify-between">
        <div>{children}</div>
        {/* Navigation Bar */}
        <nav className="flex justify-around p-4 bg-teal-400">
          <Link href="/HomeScreen">
            <a
              className={`${navActive.home ? "text-black" : "text-white"} text-lg font-bold`}
              onClick={() => setNavActive({ home: true, meals: false, schedule: false, settings: false })}
            >
              <MdOutlinePets size={55} className="mx-auto stroke-0"/>
              Pets
            </a>
          </Link>
          <Link href="/MealsScreen">
            <a
              className={`${navActive.meals ? "text-black" : "text-white"} text-lg font-bold`}
              onClick={() => setNavActive({ home: false, meals: true, schedule: false, settings: false })}
            >
              <IoFastFoodOutline size={55} className="mx-auto"/>
              Meals
            </a>
          </Link>
          <Link href="/ScheduleScreen">
            <a
              className={`${navActive.schedule ? "text-black" : "text-white"} text-lg font-bold`}
              onClick={() => setNavActive({ home: false, meals: false, schedule: true, settings: false })}
            >
              <MdSchedule size={55} className="mx-auto"/>
              Schedule
            </a>
          </Link>
          <Link href="/SettingsScreen">
            <a
              className={`${navActive.settings ? "text-black" : "text-white"} text-lg font-bold`}
              onClick={() => setNavActive({ home: false, meals: false, schedule: false, settings: true })}
            >
              <IoSettingsOutline size={55} className="mx-auto"/>
              Settings
            </a>
          </Link>
        </nav>
      </div>
    </SafeAreaView>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
