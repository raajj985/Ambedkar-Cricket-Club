
import React from "react";
import { Calendar, Users, Trophy, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teams } from "@/data/teams";
import { matches } from "@/data/matches";

const TournamentStats: React.FC = () => {
  // Calculate total matches and completed matches
  const totalMatches = matches.length;
  const completedMatches = matches.filter(match => match.status === "Completed").length;
  const liveMatches = matches.filter(match => match.status === "Live").length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Total Teams</CardTitle>
          <Users className="w-4 h-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{teams.length}</div>
          <p className="text-xs text-gray-500">Participating in tournament</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Total Matches</CardTitle>
          <Calendar className="w-4 h-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalMatches}</div>
          <p className="text-xs text-gray-500">
            {completedMatches} completed, {liveMatches} live
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Current Leader</CardTitle>
          <Trophy className="w-4 h-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {teams.sort((a, b) => b.points - a.points)[0]?.shortName}
          </div>
          <p className="text-xs text-gray-500">
            {teams.sort((a, b) => b.points - a.points)[0]?.points} points
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Tournament Progress</CardTitle>
          <Clock className="w-4 h-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Math.round((completedMatches / totalMatches) * 100)}%</div>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div 
              className="h-full bg-cricket-primary rounded-full" 
              style={{ width: `${(completedMatches / totalMatches) * 100}%` }} 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TournamentStats;
