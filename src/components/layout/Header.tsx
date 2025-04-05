
import React from "react";
import { Link } from "react-router-dom";
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 md:hidden" 
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-cricket-primary">🏏</span>
            <span className="text-xl font-semibold hidden sm:inline-block">Cricket Tournament</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-cricket-primary text-white flex items-center justify-center">
            <span className="text-sm font-medium">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
