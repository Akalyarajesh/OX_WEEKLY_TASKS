import { Link, Outlet } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden ">
        <nav className="  bg-gray-800 text-white p-5">
          <Link to="/" className="font-bold px-5">
            Home
          </Link>
          {/* <Link to="/about" className="font-bold px-5">
            About
          </Link> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link to="/about" className="font-bold px-5">
                About
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              align="start"
              className="
              bg-gray-800
              text-white
              border-none
              rounded-none
              shadow-md
              mt-2
              min-w-40
            "
            >
              <DropdownMenuItem className="cursor-pointer px-4 py-2 focus:bg-gray-700 hover:bg-gray-700 rounded-none">
                <Link to="/about/team">Team</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <Outlet />
      </div>
    </>
  );
}

export default App;
