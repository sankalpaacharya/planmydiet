import { Camera, MessageCircle, Plus } from "lucide-react";
export default function footer() {
  return (
    <div className="glass2 p-3 flex justify-center items-center space-x-10 sticky w-[95rem] bottom-0 bg-indig-400">
      <div className=" cursor-pointer">
        <Camera />
      </div>
      <div className="p-3 cursor-pointer bg-green-700 shadow-xl rounded-full">
        <Plus size={15} />
      </div>
      <div className=" cursor-pointer">
        <MessageCircle />
      </div>
    </div>
  );
}
