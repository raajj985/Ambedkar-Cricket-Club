
import React from "react";
import { teams } from "@/data/teams";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StandingsPage: React.FC = () => {
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
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Tournament Standings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Points Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 border-b">
                  <th className="pb-4 pt-2 font-medium text-left">Pos</th>
                  <th className="pb-4 pt-2 font-medium text-left">Team</th>
                  <th className="pb-4 pt-2 font-medium text-center">P</th>
                  <th className="pb-4 pt-2 font-medium text-center">W</th>
                  <th className="pb-4 pt-2 font-medium text-center">L</th>
                  <th className="pb-4 pt-2 font-medium text-center">D</th>
                  <th className="pb-4 pt-2 font-medium text-center">NRR</th>
                  <th className="pb-4 pt-2 font-medium text-center">Points</th>
                  <th className="pb-4 pt-2 font-medium text-center">Form</th>
                </tr>
              </thead>
              <tbody>
                {sortedTeams.map((team, index) => {
                  // Calculate a mock Net Run Rate
                  const nrr = ((team.wins - team.losses) / team.matches * 0.5).toFixed(2);
                  
                  // Generate mock form (last 5 matches)
                  const formIndicators = [];
                  for (let i = 0; i < 5; i++) {
                    if (i < team.wins) {
                      formIndicators.push('W');
                    } else if (i < team.wins + team.draws) {
                      formIndicators.push('D');
                    } else if (i < team.matches) {
                      formIndicators.push('L');
                    } else {
                      formIndicators.push('-');
                    }
                  }
                  
                  return (
                    <tr key={team.id} className="border-b last:border-b-0">
                      <td className="py-4 text-left">{index + 1}</td>
                      <td className="py-4 text-left">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{team.logo}</span>
                          <span className="font-medium">{team.name}</span>
                        </div>
                      </td>
                      <td className="py-4 text-center">{team.matches}</td>
                      <td className="py-4 text-center font-medium text-green-600">{team.wins}</td>
                      <td className="py-4 text-center font-medium text-red-600">{team.losses}</td>
                      <td className="py-4 text-center">{team.draws}</td>
                      <td className="py-4 text-center">{nrr}</td>
                      <td className="py-4 text-center font-bold">{team.points}</td>
                      <td className="py-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          {formIndicators.map((indicator, i) => (
                            <span 
                              key={i} 
                              className={`w-5 h-5 text-xs flex items-center justify-center rounded-full ${
                                indicator === 'W' 
                                  ? 'bg-green-100 text-green-600' 
                                  : indicator === 'L' 
                                    ? 'bg-red-100 text-red-600' 
                                    : indicator === 'D' 
                                      ? 'bg-blue-100 text-blue-600' 
                                      : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {indicator}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center mr-2">
                W
              </div>
              <span>Win</span>
              
              <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 text-xs flex items-center justify-center ml-4 mr-2">
                L
              </div>
              <span>Loss</span>
              
              <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center ml-4 mr-2">
                D
              </div>
              <span>Draw/No Result</span>
              
              <div className="ml-4">
                <span>NRR: Net Run Rate</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StandingsPage;
