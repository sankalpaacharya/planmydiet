import { createFileRoute } from '@tanstack/react-router'
import ShopPage from '@/pages/BuyItems'

export const Route = createFileRoute("/_layout/shop")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <ShopPage/>
    </div>
  )
}
