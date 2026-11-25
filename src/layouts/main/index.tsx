import RightBar from "./rightbar";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="flex min-h-screen max-w-316.25 mx-auto justify-center">
      <SideBar />
      <div className="flex gap-7.5 w-full max-w-150 lg:flex-1 lg:max-w-none">
        <div className="border-x border-[#2f3336] w-full max-w-150">
          <Outlet />
        </div>
        <RightBar />
      </div>
    </main>
  );
};

export default MainLayout;
