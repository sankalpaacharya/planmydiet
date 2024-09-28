import { Calendar } from "lucide-react";
import Day from "./day";

export default function Timeline() {
  return (
    <div className="mt-5">
      <h3 className="text-md uppercase flex items-center gap-2 text-gray-300 font-bold">
        September
        <Calendar size={17} />
      </h3>
      <div className="p-2 flex justify-between">
        <Day isToday={false} isComplete={true} date={14} day={"S"} />
        <Day isToday={false} isComplete={false} date={15} day={"M"} />
        <Day isToday={false} isComplete={true} date={16} day={"T"} />
        <Day isToday={false} isComplete={false} date={17} day={"W"} />
        <Day isToday={false} isComplete={true} date={18} day={"T"} />
        <Day isToday={false} isComplete={true} date={19} day={"F"} />
        <Day isToday={false} isComplete={false} date={20} day={"S"} />
        <Day isToday={false} isComplete={false} date={21} day={"S"} />
        <Day isToday={false} isComplete={false} date={22} day={"M"} />
        <Day isToday={false} isComplete={false} date={23} day={"T"} />
        <Day isToday={false} isComplete={true} date={24} day={"W"} />
        <Day isToday={false} isComplete={false} date={25} day={"T"} />
        <Day isToday={false} isComplete={false} date={26} day={"F"} />
        <Day isToday={false} isComplete={false} date={27} day={"S"} />
        <Day isToday={true} isComplete={false} date={28} day={"S"} />
        <Day isToday={false} isComplete={false} date={29} day={"S"} />
        <Day isToday={false} isComplete={false} date={29} day={"M"} />
      </div>
    </div>
  );
}
