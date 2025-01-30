import { createFileRoute } from '@tanstack/react-router'
import HomePage from '@/pages/HomePage'
import Navbar from '@/components/navbar'
import Menubar from '@/components/menubar'
import LandingPage from '@/components/landingpage'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    // <div className="max-w-7xl m-auto pt-4">
    //   <Navbar />
    //   <HomePage />
    //   <Menubar />
    // </div>
    <LandingPage />
  )
}
