import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { List, ChevronDown } from "lucide-react";

const ingredients = [
  { id: 1, name: "Tomato", quantity: "1 kg", image: "https://th.bing.com/th/id/OIP.almNbC0oefM7BNKQnQ1uRAHaEK?rs=1&pid=ImgDetMain" },
  { id: 2, name: "Potato", quantity: "2 kg", image: "https://th.bing.com/th/id/OIP.BwK17ejdeJ6r-TiCy6lMngHaE8?rs=1&pid=ImgDetMain" },
  { id: 3, name: "Milk", quantity: "1 litre", image: "https://th.bing.com/th/id/OIP.ls8K9Y6j66nZ9SwgE5CmhQHaHa?rs=1&pid=ImgDetMain" },
  { id: 4, name: "Spinach", quantity: "500 g", image: "https://healthiersteps.com/wp-content/uploads/2023/02/bunch-spinach.jpg" },
  { id: 5, name: "Onion", quantity: "1 kg", image: "https://th.bing.com/th/id/OIP.EjEADc_jIeSoOLksQcWK3gHaD4?w=1200&h=630&rs=1&pid=ImgDetMain" },
  { id: 6, name: "Bread", quantity: "1 loaf", image: "https://th.bing.com/th/id/OIP.oCGfdttRamtu9d--AT0VCQHaEK?rs=1&pid=ImgDetMain" },
  { id: 7, name: "Eggs", quantity: "3 units", image: "https://th.bing.com/th/id/OIP.o9zXPiNCNJbEp_cUrPpvrAHaFi?w=1200&h=897&rs=1&pid=ImgDetMain" },
  { id: 8, name: "Carrot", quantity: "1.5 kg", image: "https://th.bing.com/th/id/OIP.EOafQATWNirsC4jeS2vPHgHaFj?rs=1&pid=ImgDetMain" },
  { id: 9, name: "Carrot", quantity: "500 g", image: "https://healthiersteps.com/wp-content/uploads/2023/02/bunch-spinach.jpg" },
  { id: 10, name: "Butter", quantity: "1 cube", image: "https://img2.exportersindia.com/product_images/bc-full/dir_62/1837486/butter-561487.jpg" }
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function IngredientList() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="flex justify-center items-center">
      <Card className="h-auto">
        <CardHeader className="">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <List className="text-rose-600" size={25} strokeWidth={3} />
              <CardTitle className="text-xl font-bold">Ingredients for <span className="text-rose-300 italic">{selectedDay}</span></CardTitle>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="text-white bg-rose-600 hover:bg-rose-700 px-4 py-1 text-sm flex items-center"
                >
                  {selectedDay} <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {days.map((day) => (
                  <DropdownMenuItem key={day} className="cursor-pointer" onClick={() => setSelectedDay(day)}>
                    {day}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-y-auto max-h-[370px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <div className="grid grid-cols-3 gap-4 mr-4">
              {ingredients.map((ingredient) => (
                <Card key={ingredient.id} className="p-2 shadow-md  border-rose-300">
                  <div className="w-full h-32 overflow-hidden rounded-md mb-2">
                    <img src={ingredient.image} alt={ingredient.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="font-medium">{ingredient.name}</span>
                    <span className="text-gray-300">{ingredient.quantity}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}