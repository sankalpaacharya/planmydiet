import { createFileRoute } from '@tanstack/react-router'
import IngredientList from '@/components/IngredientList'
import IngredientSelector from '@/components/IngredientSelector'
import { useState } from 'react'

export const Route = createFileRoute('/_layout/shop/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const handleBuy = () => {
    if (selectedItems.length === 0) {
      alert('Please select at least one item to proceed!')
      return
    }
    window.location.href = 'https://www.blinkit.com'
  }
  return (
    <div className="max-w-full shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <div className="flex justify-start items-center mb-2">
          <h2 className="text-3xl font-bold">🛍️Shop Ingredients</h2>
        </div>
        <p className="text-gray-600 text-lg">
          Select the ingredients you need and proceed to buy via Blinkit.
        </p>
      </div>

      {/* Ingredients Selection Container */}
      <div className="flex justify-center mb-6 space-x-3">
        {/* Available Ingredients Section */}
        <div className="flex-[5] p-6 pl-0 rounded-md shadow-md h-full min-h-[500px]">
          <IngredientList />
        </div>

        {/* Select Items to Buy Section */}
        <div className="flex-[3] p-6 pl-0 rounded-md shadow-md h-full min-h-[500px] flex flex-col">
          <IngredientSelector
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleBuy={handleBuy}
          />
        </div>
      </div>
    </div>
  )
}
