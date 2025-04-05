
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  Settings, 
  Trophy, 
  Calendar, 
  Users, 
  FileEdit, 
  Kanban, 
  LogOut,
  FilePlus,
  Shield,
  Edit,
  Plus,
  Search
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const AdminPage: React.FC = () => {
  const { logout } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out of the admin panel.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tournament Admin Console</h1>
          <p className="text-muted-foreground">Manage all aspects of the cricket tournament</p>
        </div>
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
          <LogOut size={16} />
          Log Out
        </Button>
      </div>
      
      <Tabs defaultValue="dashboard" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 w-full max-w-4xl">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="scoring">Live Scoring</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard 
              title="Teams" 
              value="12" 
              description="Registered teams" 
              icon={<Users className="h-8 w-8 text-blue-500" />} 
            />
            <DashboardCard 
              title="Matches" 
              value="32" 
              description="Total fixtures" 
              icon={<Calendar className="h-8 w-8 text-green-500" />} 
            />
            <DashboardCard 
              title="Live Now" 
              value="2" 
              description="Ongoing matches" 
              icon={<FileEdit className="h-8 w-8 text-cricket-primary" />} 
            />
            <DashboardCard 
              title="Completed" 
              value="18" 
              description="Finished matches" 
              icon={<Trophy className="h-8 w-8 text-amber-500" />} 
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ActivityTimeline />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button className="flex items-center gap-2 bg-cricket-primary hover:bg-cricket-secondary">
                    <Plus size={16} />
                    New Match
                  </Button>
                  <Button className="flex items-center gap-2">
                    <FileEdit size={16} />
                    Update Score
                  </Button>
                  <Button className="flex items-center gap-2" variant="outline">
                    <Users size={16} />
                    Manage Teams
                  </Button>
                  <Button className="flex items-center gap-2" variant="outline">
                    <Shield size={16} />
                    Authorize User
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Teams Tab */}
        <TabsContent value="teams" className="space-y-4">
          <div className="flex justify-between mb-4">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search teams..." className="pl-8" />
            </div>
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              Add New Team
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Team Name</TableHead>
                    <TableHead>Captain</TableHead>
                    <TableHead>Players</TableHead>
                    <TableHead>Matches</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {['Royal Challengers', 'Super Kings', 'Mumbai Indians', 'Titans'].map((team, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{team}</TableCell>
                      <TableCell>{['Virat Kohli', 'MS Dhoni', 'Rohit Sharma', 'Hardik Pandya'][i]}</TableCell>
                      <TableCell>11</TableCell>
                      <TableCell>{[8, 7, 9, 6][i]}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Plus size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Matches Tab */}
        <TabsContent value="matches" className="space-y-4">
          <div className="flex justify-between mb-4">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search matches..." className="pl-8" />
            </div>
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              Schedule Match
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Match</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Venue</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {teams: 'RCB vs CSK', date: '2025-04-12 14:00', venue: 'M. Chinnaswamy Stadium', status: 'Scheduled'},
                    {teams: 'MI vs GT', date: '2025-04-10 18:00', venue: 'Wankhede Stadium', status: 'Live'},
                    {teams: 'CSK vs MI', date: '2025-04-08 14:00', venue: 'Chepauk Stadium', status: 'Completed'},
                    {teams: 'GT vs RCB', date: '2025-04-05 18:00', venue: 'Narendra Modi Stadium', status: 'Completed'}
                  ].map((match, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{match.teams}</TableCell>
                      <TableCell>{match.date}</TableCell>
                      <TableCell>{match.venue}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          match.status === 'Live' 
                            ? 'bg-green-100 text-green-800' 
                            : match.status === 'Completed' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-amber-100 text-amber-800'
                        }`}>
                          {match.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit size={16} />
                          </Button>
                          {match.status === 'Live' && (
                            <Button size="sm" className="bg-cricket-primary hover:bg-cricket-secondary">
                              <FileEdit size={16} />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Live Scoring Tab */}
        <TabsContent value="scoring" className="space-y-4">
          <Card className="bg-cricket-primary/5 border-cricket-primary">
            <CardHeader>
              <CardTitle>Live Match: MI vs GT</CardTitle>
              <CardDescription>Wankhede Stadium • In Progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between mb-2 font-bold">
                    <span>MI: 156/4</span>
                    <span>18.2 overs</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between pb-2 border-b">
                      <Label>Current Batsmen</Label>
                      <span className="text-sm">R (B)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <span className="font-medium">Rohit Sharma*</span>
                      </div>
                      <span>72 (48)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <span className="font-medium">Kieron Pollard</span>
                      </div>
                      <span>35 (21)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between pb-2 border-b">
                      <Label>Current Bowler</Label>
                      <span className="text-sm">O-M-R-W</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <span className="font-medium">Rashid Khan</span>
                      </div>
                      <span>3.2-0-25-2</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Label>Last 5 Balls</Label>
                    <div className="flex gap-1">
                      {['1', '6', '0', 'W', '4'].map((ball, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium ${
                          ball === 'W' ? 'bg-red-500' : 
                          ball === '6' ? 'bg-purple-500' : 
                          ball === '4' ? 'bg-blue-500' : 
                          'bg-gray-500'
                        }`}>
                          {ball}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="runs">Runs</Label>
                      <div className="grid grid-cols-4 gap-1 mt-1">
                        {[0, 1, 2, 3, 4, 6].map((run) => (
                          <Button key={run} variant="outline" className="h-10">
                            {run}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="extras">Extras</Label>
                      <div className="grid grid-cols-3 gap-1 mt-1">
                        {['WD', 'NB', 'B', 'LB'].map((extra) => (
                          <Button key={extra} variant="outline" className="h-10 text-xs">
                            {extra}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="wicket">Wicket</Label>
                    <Button variant="destructive" className="w-full">Add Wicket</Button>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="commentary">Add Commentary</Label>
                    <Textarea placeholder="Enter ball-by-ball commentary..." id="commentary" />
                    <Button className="w-full mt-2">Update</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tournament Settings</CardTitle>
              <CardDescription>Configure the tournament rules and parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tournamentName">Tournament Name</Label>
                  <Input id="tournamentName" defaultValue="IPL 2025" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" defaultValue="2025-04-01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" type="date" defaultValue="2025-05-30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxTeams">Maximum Teams</Label>
                  <Input id="maxTeams" type="number" defaultValue="12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="format">Tournament Format</Label>
                  <Input id="format" defaultValue="Round Robin + Playoffs" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="overs">Overs per Innings</Label>
                  <Input id="overs" type="number" defaultValue="20" />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end gap-2">
                <Button variant="outline">Reset</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Admin Users</CardTitle>
              <CardDescription>Manage administrator access</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {name: 'admin', role: 'Super Admin', lastLogin: '2025-04-05 09:34', status: 'Active'},
                    {name: 'scorer1', role: 'Scorer', lastLogin: '2025-04-04 15:22', status: 'Active'},
                    {name: 'manager', role: 'Team Manager', lastLogin: '2025-04-03 11:05', status: 'Inactive'}
                  ].map((user, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button className="mt-4 flex items-center gap-2">
                <Plus size={16} />
                Add Admin User
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Dashboard card component for metrics
const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon 
}: { 
  title: string; 
  value: string; 
  description: string; 
  icon: React.ReactNode;
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div>{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};

// Activity timeline for recent events
const ActivityTimeline = () => {
  const activities = [
    { action: "Match score updated", user: "admin", time: "5 minutes ago", match: "MI vs GT" },
    { action: "New team added", user: "admin", time: "2 hours ago", team: "Delhi Capitals" },
    { action: "Match scheduled", user: "manager", time: "Yesterday, 15:30", match: "RCB vs CSK" },
    { action: "Player transferred", user: "admin", time: "2 days ago", player: "K.L. Rahul", from: "LSG", to: "RCB" },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity, i) => (
        <div key={i} className="flex gap-3">
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cricket-primary/10 text-cricket-primary">
            {activity.action.includes("Match") ? (
              <Calendar className="h-4 w-4" />
            ) : activity.action.includes("team") ? (
              <Users className="h-4 w-4" />
            ) : activity.action.includes("Player") ? (
              <Settings className="h-4 w-4" />
            ) : (
              <FileEdit className="h-4 w-4" />
            )}
            {i !== activities.length - 1 && (
              <span className="absolute top-8 bottom-0 left-1/2 -ml-px h-10 w-px bg-cricket-primary/10" />
            )}
          </div>
          <div className="pb-4">
            <p className="text-sm font-medium">{activity.action}</p>
            <p className="text-xs text-muted-foreground">
              By {activity.user} • {activity.time}
            </p>
            {activity.match && (
              <p className="text-xs mt-1 font-medium text-cricket-primary">{activity.match}</p>
            )}
            {activity.team && (
              <p className="text-xs mt-1 font-medium text-cricket-primary">{activity.team}</p>
            )}
            {activity.player && (
              <p className="text-xs mt-1 font-medium text-cricket-primary">
                {activity.player}: {activity.from} → {activity.to}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
