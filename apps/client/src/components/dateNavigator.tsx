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
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={handlePreviousDay}
        className="pr-3"
      >
        <ChevronLeft size={30}/>
      </button>

      <div className="text-lg font-medium text-white">
        {format(currentDate, "eeee, MMMM d, yyyy")}
      </div>

      <button
        onClick={handleNextDay}
        className="pl-3"
      >
        <ChevronRight size={30}/>
      </button>
    </div>
  );
}
