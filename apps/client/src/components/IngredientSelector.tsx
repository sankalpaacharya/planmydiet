import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const ingredients = [
  { id: 1, name: "Tomato" },
  { id: 2, name: "Potato" },
  { id: 3, name: "Milk" },
  { id: 4, name: "Spinach" },
  { id: 5, name: "Onion" },
  { id: 6, name: "Braed" },
  { id: 7, name: "Eggs" },
  { id: 8, name: "Carrot" },
  { id: 9, name: "Butter" }  
];

interface IngredientSelectorProps {
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
  handleBuy: () => void; // Add handleBuy function as a prop
}

export default function IngredientSelector({
  selectedItems,
  setSelectedItems,
  handleBuy,
}: IngredientSelectorProps) {
  const handleCheckboxChange = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Card className="h-auto">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <ShoppingBag className="text-rose-600" size={25} strokeWidth={2} />
          <CardTitle className="text-xl font-bold">Select Items to Buy</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className="flex items-center space-x-3">
              <Checkbox
                id={`ingredient-${ingredient.id}`}
                checked={selectedItems.includes(ingredient.id)}
                onCheckedChange={() => handleCheckboxChange(ingredient.id)}
              />
              <label htmlFor={`ingredient-${ingredient.id}`}>{ingredient.name}</label>
            </div>
          ))}
        </div>

        {/* Add Buy Button inside the card */}
        <div className="mt-6 text-center">
          <Button onClick={handleBuy} className="w-full">
            <ShoppingBag className="w-5 h-10 mr-2" />
            <span>Buy from Blinkit</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
