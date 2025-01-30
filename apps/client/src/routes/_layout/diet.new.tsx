import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/diet/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/plan/new"!</div>
}
