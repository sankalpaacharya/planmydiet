import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PlanPage() {
  const { id } = useParams(); 
  const [plans, setPlans] = useState([]); 
  useEffect(() => {
    fetch(`http://localhost:3000/plan/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPlans(data); 
      })
      .catch((error) => console.error("Error fetching plans:", error));
  }, [id]); 

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[90%] w-[80%] md:px-5 lg:px-0 mt-5 ">
        <Navbar />
        <div className="mt-20 grid grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div key={plan.id} className="p-5 glass">
              <h3 className="text-xl font-bold">{plan.title}</h3>
              <p className="text-gray-500 mt-2">
                {plan.created_at}
              </p>
              <Link to={`/plan/${plan.id}/${plan.created_at}`}>
                <Button className="text-gray-200 mt-5 bg-green-900 rounded-full">
                  Proceed
                  <ChevronRight />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
