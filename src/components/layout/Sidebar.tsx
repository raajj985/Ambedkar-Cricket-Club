
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Home, Trophy, Users, Calendar, BarChart3, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navItems = [
    { path: "/", icon: <Home size={20} />, label: "Dashboard" },
    { path: "/teams", icon: <Users size={20} />, label: "Teams" },
    { path: "/matches", icon: <Calendar size={20} />, label: "Matches" },
    { path: "/standings", icon: <BarChart3 size={20} />, label: "Standings" },
    { path: "/admin", icon: <Settings size={20} />, label: "Admin" },
  ];

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r shadow-sm transition-transform duration-300 transform md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-center h-16 border-b">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-cricket-primary">🏏</span>
          <span className="text-xl font-semibold">Cricket Tournament</span>
        </Link>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-cricket-pitch hover:text-cricket-primary transition-colors",
                    isActive && "bg-cricket-pitch text-cricket-primary font-medium"
                  )
                }
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
