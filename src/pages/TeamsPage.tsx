
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { teams } from "@/data/teams";
import { Link } from "react-router-dom";

const TeamsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Teams</h1>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teams.map(team => (
          <Link key={team.id} to={`/teams/${team.id}`}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div 
                className="h-24 flex items-center justify-center" 
                style={{ backgroundColor: team.primaryColor }}
              >
                <span className="text-4xl">{team.logo}</span>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{team.name}</h3>
                <div className="text-sm text-gray-500">Captain: {team.captain}</div>
                
                <div className="grid grid-cols-4 mt-4 text-center text-sm">
                  <div>
                    <div className="font-semibold">{team.matches}</div>
                    <div className="text-xs text-gray-500">Matches</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">{team.wins}</div>
                    <div className="text-xs text-gray-500">Wins</div>
                  </div>
                  <div>
                    <div className="font-semibold text-red-600">{team.losses}</div>
                    <div className="text-xs text-gray-500">Losses</div>
                  </div>
                  <div>
                    <div className="font-semibold">{team.points}</div>
                    <div className="text-xs text-gray-500">Points</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
