
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { matches } from "@/data/matches";
import { Link } from "react-router-dom";

const RecentResults: React.FC = () => {
  // Get completed matches
  const completedMatches = matches
    .filter(match => match.status === "Completed")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {completedMatches.length === 0 ? (
            <p className="text-center py-4 text-gray-500">No completed matches yet</p>
          ) : (
            completedMatches.map(match => (
              <Link 
                key={match.id} 
                to={`/matches/${match.id}`}
                className="block"
              >
                <div className="border rounded-md p-4 hover:border-cricket-primary hover:shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs text-gray-500">
                      {new Date(match.date).toLocaleDateString('en-US', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </div>
                    <div className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                      {match.matchType}
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-xl">{match.team1.logo}</div>
                        <div className="text-sm font-medium">{match.team1.name}</div>
                      </div>
                      <div className="text-sm">
                        {match.inning1?.totalRuns || 0}/{match.inning1?.wickets || 0}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-xl">{match.team2.logo}</div>
                        <div className="text-sm font-medium">{match.team2.name}</div>
                      </div>
                      <div className="text-sm">
                        {match.inning2?.totalRuns || 0}/{match.inning2?.wickets || 0}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-xs font-medium text-cricket-primary">
                    {match.result}
                  </div>
                </div>
              </Link>
            ))
          )}
          
          <div className="flex justify-center">
            <Link 
              to="/matches" 
              className="text-cricket-primary hover:text-cricket-secondary text-sm font-medium"
            >
              View all results
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentResults;
