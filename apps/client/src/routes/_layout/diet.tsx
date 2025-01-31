import { createFileRoute } from '@tanstack/react-router'
import DietPlan from '@/pages/DietLayout'
export const Route = createFileRoute('/_layout/diet')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/diet"!</div>
}
