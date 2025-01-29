import Menubar from '@/components/menubar'
import Challenges from '@/pages/Challenges'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/challenges')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Challenges />
      <Menubar />
    </div>
  )
}
