
import React from "react";
import { Calendar, Users, Trophy, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { teams } from "@/data/teams";
import { matches } from "@/data/matches";

const TournamentStats: React.FC = () => {
  // Calculate total matches and completed matches
  const totalMatches = matches.length;
  const completedMatches = matches.filter(match => match.status === "Completed").length;
  const liveMatches = matches.filter(match => match.status === "Live").length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-[#0f1729] text-white border-none">
        <CardContent className="pt-6">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Total Teams</h3>
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold">{teams.length}</div>
          <p className="text-xs text-gray-400 mt-1">Participating in tournament</p>
        </CardContent>
      </Card>
      
      <Card className="bg-[#0f1729] text-white border-none">
        <CardContent className="pt-6">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Total Matches</h3>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold">{totalMatches}</div>
          <p className="text-xs text-gray-400 mt-1">
            {completedMatches} completed, {liveMatches} live
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-[#0f1729] text-white border-none">
        <CardContent className="pt-6">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Current Leader</h3>
            <Trophy className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold">
            {teams.sort((a, b) => b.points - a.points)[0]?.shortName}
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {teams.sort((a, b) => b.points - a.points)[0]?.points} points
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-[#0f1729] text-white border-none">
        <CardContent className="pt-6">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium">Tournament Progress</h3>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold">{Math.round((completedMatches / totalMatches) * 100)}%</div>
          <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
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
