import RightBar from "./rightbar";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="flex min-h-screen max-w-7xl mx-auto">
      <SideBar />
      <div className="flex flex-1">
        <div className="border-x border-[#2f3336] w-150">
          <Outlet />
        </div>
        <RightBar />
      </div>
    </main>
  );
};

export default MainLayout;
