// import { useNavigate } from "react-router-dom";
import DesktopLayout from "./desktop-layout";
import MobileLayout from "./mobile-layout";
// import { useEffect } from "react";

export default function MainLayout() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/portfolio");
  // }, []);

  return (
    <div className="w-full h-full">
      <div className="hidden sm:block">
        <DesktopLayout />
      </div>
      <div className="block sm:hidden">
        <MobileLayout />
      </div>
    </div>
  );
}
