import { Link } from 'react-router-dom';
import MealsList from '../components/MealsList';
import { FaPlus } from "react-icons/fa6";


export default function MealsScreen() {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className='flex mt-4'>
          <Link
            to="/"
            className="flex justify-center items-center h-24 w-24 py-3 bg-white text-slate-500 rounded-full border-solid border-4 border-slate-500"
          >
            <FaPlus size={50}/>
          </Link>
          <MealsList />
        </div>
      </div>
    );
  }
