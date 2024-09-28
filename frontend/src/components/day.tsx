interface DayProps {
  day: string;
  date: number;
  isComplete: boolean;
  isToday: boolean;
}

export default function Day({ day, date, isToday, isComplete }: DayProps) {
  return (
    <div className="flex flex-col cursor-pointer items-center mt-3 w-fit space-y-2 ">
      <p className="text-md text-gray-500">{day}</p>
      <div
        className={`border py-2 px-3 rounded-full font-bold ${isToday ? "border-2 border-indigo-400" : "border"} ${isComplete ? "border-2 border-green-400" : "border"}`}
      >
        {date}
      </div>
    </div>
  );
}
