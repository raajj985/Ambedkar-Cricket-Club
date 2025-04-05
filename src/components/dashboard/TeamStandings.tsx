
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teams } from "@/data/teams";
import { Link } from "react-router-dom";

const TeamStandings: React.FC = () => {
  // Sort teams by points
  const sortedTeams = [...teams].sort((a, b) => {
    // First by points
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    // Then by net run rate (for this demo, we'll use wins as a proxy)
    return b.wins - a.wins;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Standings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-500 border-b">
                <th className="pb-2 font-medium text-left">Pos</th>
                <th className="pb-2 font-medium text-left">Team</th>
                <th className="pb-2 font-medium text-center">Played</th>
                <th className="pb-2 font-medium text-center">Won</th>
                <th className="pb-2 font-medium text-center">Lost</th>
                <th className="pb-2 font-medium text-center">Points</th>
              </tr>
            </thead>
            <tbody>
              {sortedTeams.map((team, index) => (
                <tr key={team.id} className="border-b last:border-b-0">
                  <td className="py-3 text-left">{index + 1}</td>
                  <td className="py-3 text-left">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{team.logo}</span>
                      <span className="font-medium">{team.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-center">{team.matches}</td>
                  <td className="py-3 text-center font-medium text-green-600">{team.wins}</td>
                  <td className="py-3 text-center font-medium text-red-600">{team.losses}</td>
                  <td className="py-3 text-center font-medium">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-center">
          <Link 
            to="/standings" 
            className="text-cricket-primary hover:text-cricket-secondary text-sm font-medium"
          >
            View detailed standings
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamStandings;
