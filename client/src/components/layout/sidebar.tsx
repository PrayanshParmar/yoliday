import Logo from "@/assets/logo.svg";
import dashboard from "@/assets/dashboard.svg";
import portfolio from "@/assets/portfolio.svg";
import inputs from "@/assets/inputs.svg";
import profile from "@/assets/profile.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
// This is sample data.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: dashboard,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: portfolio,
  },
  {
    title: "Inputs",
    url: "/inputs",
    icon: inputs,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: profile,
  },
];

export default function SideBar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-3 ">
            <div className="flex items-center gap-2">
              <img className="w-[30px] h-[30px]" src={Logo} alt="Logo" />
              <span className="text-sm font-semibold text-white ">LOGO</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className=" mt-[80px]  ">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="sidebarcontent" asChild>
                    <a href={item.url}>
                      <img
                        className="w-6 h-6 "
                        src={item.icon}
                        alt={item.title}
                      />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
