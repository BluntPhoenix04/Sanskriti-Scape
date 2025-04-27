import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
// import { WorldMapDemo } from "@/components/WorldMapDemo";

const Navbar = () => {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">Sanskriti Scape</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/world-map-demo" className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Interactive Map
              </Link>
              
              {/*               
              <Link
                href="/world-map"
                className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Global Connections
              </Link> 
              */}
              
              <Link
                href="/library"
                className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                E-Library
              </Link>
              
              <Link href="/about" className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              
            </div>
          </div>
          <div className="flex items-center">
            <ModeToggle />
            <Button variant="outline" className="ml-4">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

