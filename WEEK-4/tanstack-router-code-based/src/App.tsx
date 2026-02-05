import { Outlet } from "@tanstack/react-router";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="w-full sm:ml-[20vw] sm:w-[80vw] min-h-screen bg-gray-200 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
