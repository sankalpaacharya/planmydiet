import { Camera, MessageCircle, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/DailogBox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react";


export default function footer() {
  const [position, setPosition] = React.useState("bottom");
  const [mealType, setMealType] = React.useState("Add Meal Type");
  const [mealDescription, setMealDescription] = React.useState("");

  const handleAddMeal = () => {
    const mealData = {
      plan_id: "0581b0d2-b6c8-40fe-80e4-4081a8824451",
      user_id: "97540b8d-26cd-49a4-bb85-e1eafc2abd6c",
      meal_type: mealType.toLowerCase(), 
      text: mealDescription,
    };
  
    fetch("http://localhost:3000/log/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mealData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        // Clear form values after successful submission
        setMealType("Add Meal Type");
        setMealDescription("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  const handleDialogClose = (isOpen: boolean) => {
    if (!isOpen) {
      setMealType("Add Meal Type");
      setMealDescription("");
    }
  };


  return (
    <div className="glass2 p-3 flex justify-center items-center space-x-10 sticky w-[95rem] bottom-0 bg-indig-400">
      <div className=" cursor-pointer">
        <Camera />
      </div>

      <div className="p-3 cursor-pointer bg-green-700 shadow-xl rounded-full">
        <Dialog onOpenChange={handleDialogClose}>
          <DialogTrigger asChild>
            <Plus size={15} />
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Meal</DialogTitle>
              <DialogDescription>
                Add the details about your meal
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">{mealType}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={(value) => {
                        setPosition(value);
                        setMealType(value);
                      }}
                    >
                      <DropdownMenuRadioItem value="Breakfast">Breakfast</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Lunch">Lunch</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="high-tea">high-tea</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Dinner">Dinner</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Label htmlFor="mealdes">Meal Description</Label>
                <Input
                  placeholder="Please enter what you ate"
                  name="mealdes"
                  value={mealDescription}
                  onChange={(e) => setMealDescription(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <Button onClick={handleAddMeal}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className=" cursor-pointer">
        <MessageCircle />
      </div>
    </div>
  );
}
