
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, Trophy, Calendar, Users, FileEdit, Kanban, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const AdminPage: React.FC = () => {
  const { logout } = useAuth();
  const { toast } = useToast();
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out of the admin panel.",
    });
  };

  const adminFeatures = [
    {
      title: "Team Management",
      description: "Add, edit, or remove teams and players in the tournament",
      icon: <Users size={40} />,
      path: "#",
      color: "text-blue-500"
    },
    {
      title: "Match Scheduling",
      description: "Create and manage match fixtures and venues",
      icon: <Calendar size={40} />,
      path: "#",
      color: "text-green-500"
    },
    {
      title: "Live Scoring",
      description: "Update scores and match events in real-time",
      icon: <FileEdit size={40} />,
      path: "#",
      color: "text-cricket-primary"
    },
    {
      title: "Tournament Setup",
      description: "Configure tournament format, rules, and settings",
      icon: <Trophy size={40} />,
      path: "#",
      color: "text-amber-500"
    },
    {
      title: "User Management",
      description: "Manage admin users and their permissions",
      icon: <Settings size={40} />,
      path: "#",
      color: "text-indigo-500"
    },
    {
      title: "Dashboard Configuration",
      description: "Customize what appears on the tournament dashboard",
      icon: <Kanban size={40} />,
      path: "#",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Admin Portal</h1>
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
          <LogOut size={16} />
          Log Out
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adminFeatures.map(feature => (
          <Card key={feature.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className={feature.color}>{feature.icon}</div>
              <CardTitle className="mt-2">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">{feature.description}</p>
              <Button asChild variant="outline" className="w-full">
                <Link to={feature.path}>Manage</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-cricket-primary/10 border-cricket-primary">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <div className="bg-cricket-primary text-white p-3 rounded-full">
              <FileEdit size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Quick Access: Live Scoring</h3>
              <p className="text-sm text-gray-600 mb-4">
                Update scores for ongoing matches in real-time. This feature allows you to enter 
                ball-by-ball updates, manage wickets, and calculate statistics automatically.
              </p>
              <Button className="bg-cricket-primary hover:bg-cricket-secondary">
                Open Scorer
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;
