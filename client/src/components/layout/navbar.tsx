import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import { UserAvatar } from "../custome-ui/user-avtar";
import down from "@/assets/down.svg";
export default function NavBar() {
  return (
    <header className="items-center justify-between hidden h-16 gap-2 px-4 border-b sm:flex shrink-0">
      <SidebarTrigger className="-ml-1" />
      <div className="flex gap-3 ">
        <span className="relative flex items-center">
          <span className="absolute top-0 right-0 flex w-3 h-3">
            <span className="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-3 h-3 bg-red-500 rounded-full"></span>
          </span>
          <Bell className="w-6 h-6 text-gray-700" />
        </span>
        <UserAvatar src={"/profile.png"}></UserAvatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold ">Lorem Ips</span>
          <span className=" text-sm font-normal text-[#848484]">Manager</span>
        </div>
        <button className="flex items-center ">
          <img src={down} alt="down" />
        </button>
      </div>
    </header>
  );
}
