import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
function AppLayout() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center h-screen">
        <div className="md:w-[20%] w-[30%]  bg-transparent h-screen border-gray-100 ">
          <Sidebar />
        </div>
        <div className="md:w-[80%] w-[70%]  h-screen border-2 border-gray-200">
          <div className="w-full md:py-8 py-2 bg-gray-100 border-2 border-gray-200">
            <Header />
          </div>
          <div className="p-8 overflow-y-auto bg-gray-200 h-screen border-2 border-gray-200">
            <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12 h-screen bg-gray-300 border-2 border-gray-200">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
