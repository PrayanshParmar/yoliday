import NavBar from "@/components/layout/navbar";
import SideBar from "@/components/layout/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function DesktopLayout() {
  return (
    <SidebarProvider>
      <SideBar />
      <SidebarInset>
        <NavBar></NavBar>
        <main className="flex flex-col flex-1 gap-4 p-0 sm:p-5 bg-muted/70">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
