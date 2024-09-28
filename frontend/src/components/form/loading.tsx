import { useEffect, useState } from "react";
import loadingGif from "@/assets/food-hungry.gif"; 

const Loading = () => {
  const [loadingText, setLoadingText] = useState("");

  const options = [
    "Negotiating with your sweet tooth...",
    "Transforming 'I can't' into 'I can't believe it's not butter'...",
    "Busy arguing with a stubborn avocado...",
    "Calculating how many steps it takes to walk off a donut...",
    "Transforming your dad bod into a father figure...",
    "Counting calories so you don't have to... you're welcome.",
    "Negotiating a peace treaty between carbs and abs...",
    "Converting your family pack into a six pack...",
    "Convincing your taste buds that water is the new soda...",
    "Turning your 'I'll start Monday' into 'I'll start now'... finally.",
    "Negotiating with gravity to be a little kinder to your scale...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      setLoadingText(options[randomIndex]);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black bg-opacity-70 fixed top-0 left-0 z-50">
      <div className="flex flex-col items-center">
        <img src={loadingGif} alt="Loading..." className="w-32 h-32 animate-pulse" />
        <p className="text-white mt-4">{loadingText || "Loading..."}</p>
      </div>
    </div>
  );
};

export default Loading;
