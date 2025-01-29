import { createFileRoute } from '@tanstack/react-router'
import DietPlan from '@/pages/DietPlan'
import Menubar from '@/components/menubar'

export const Route = createFileRoute('/_layout/plan/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  // const { id } = Route.useParams();
  return (
    <div>
      <DietPlan />
      <Menubar />
    </div>
  )
}
