import { useState } from "react";
import { format, addDays, subDays } from "date-fns";
import { ChevronLeft, ChevronRight  } from 'lucide-react';

export default function DateNavigator() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousDay = () => {
    setCurrentDate((prevDate) => subDays(prevDate, 1));
  };

  const handleNextDay = () => {
    setCurrentDate((prevDate) => addDays(prevDate, 1));
  };

  return (
    <div className="flex items-center justify- max-w-80 ">
      <button
        onClick={handlePreviousDay}
      >
        <ChevronLeft size={30} className="hover:text-rose-500"/>
      </button>

      <div className="text-lg font-medium sm:min-w-64 flex justify-center ">
        {format(currentDate, "eeee, MMMM d, yyyy")}
      </div>

      <button
        onClick={handleNextDay}
      >
        <ChevronRight size={30} className="hover:text-rose-500"/>
      </button>
    </div>
  );
}
