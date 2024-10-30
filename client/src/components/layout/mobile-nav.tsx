// import { useLocation, useNavigate } from "react-router-dom";
// import { Home, Briefcase, Search, User } from "lucide-react";
// import { cn } from "@/lib/utils";

// const navItems = [
//   { icon: Home, label: "Home", path: "/" },
//   { icon: Briefcase, label: "Portfolio", path: "/portfolio" },
//   { icon: Search, label: "Inspect", path: "/inputs" },
//   { icon: User, label: "Profile", path: "/profile" },
// ];

// export default function MobileBottomNav() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 border-t bg-background border-border md:hidden">
//       <ul className="flex items-center justify-around h-16">
//         {navItems.map((item) => (
//           <li key={item.label} className="flex-1">
//             <button
//               onClick={() => navigate(item.path)}
//               className={cn(
//                 "flex flex-col items-center justify-center w-full h-full text-sm",
//                 location.pathname === item.path
//                   ? "text-[#DF5532]"
//                   : "text-muted-foreground hover:text-[#DF5532]"
//               )}
//             >
//               <item.icon
//                 className="w-5 h-5 mb-1 "
//                 stroke={
//                   location.pathname === item.path ? "white" : "currentColor"
//                 }
//                 // fill={
//                 //   location.pathname === item.path ? "#DF5532" : "currentColor"
//                 // }
//               />
//               <span>{item.label}</span>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

import { useLocation, useNavigate } from "react-router-dom";
// import { Home, Briefcase, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";
import portfolioIcon from "@/assets/mobile-navbar/portfolio.svg";

// const navItems = [
//   { icon: Home, label: "Home", path: "/" },
//   { icon: Briefcase, label: "Portfolio", path: "/portfolio" },
//   { icon: Search, label: "Inspect", path: "/inputs" },
//   { icon: User, label: "Profile", path: "/profile" },
// ];

const navItems = [
  {
    label: "Portfolio",
    path: "/portfolio",
    icon: portfolioIcon,
  },
];
export default function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-background border-border md:hidden">
      <ul className="flex items-center justify-around h-16">
        {navItems.map((item) => (
          <li key={item.label} className="flex-1">
            <button
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full text-sm",
                location.pathname === item.path
                  ? "text-[#DF5532]"
                  : "text-muted-foreground hover:text-[#DF5532]"
              )}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={cn(
                  "w-6 h-6 mb-1 transition-colors",
                  location.pathname === item.path
                    ? "filter-orange" // Apply orange color filter on active
                    : "filter-gray hover:filter-orange" // Apply gray filter with orange on hover
                )}
              />

              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
