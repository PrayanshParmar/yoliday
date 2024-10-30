import MobileBottomNav from "@/components/layout/mobile-nav";
import { Outlet } from "react-router-dom";

export default function MobileLayout() {
  return (
    <div className="block sm:hidden">
      <main className="flex flex-col flex-1 gap-4 ">
        <Outlet />
      </main>
      <MobileBottomNav />
    </div>
  );
}
