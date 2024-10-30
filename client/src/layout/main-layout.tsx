import { useNavigate, useLocation } from "react-router-dom";
import DesktopLayout from "./desktop-layout";
import MobileLayout from "./mobile-layout";
import { useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is root ('/')
    if (location.pathname === "/") {
      navigate("/portfolio");
    }
  }, [location.pathname, navigate]);

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
