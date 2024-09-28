import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";
import React from "react";

export default function homepage() {
  return (
    <div className="flex flex-col items-center">
      <div className="md:max-w-[95rem] md:px-5 lg:px-0 mt-5 w-full">
        <Navbar />
        <Timeline />
      </div>
    </div>
  );
}
