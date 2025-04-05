
import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { matches } from "@/data/matches";
import { Link } from "react-router-dom";

const UpcomingMatches: React.FC = () => {
  // Get upcoming matches
  const upcomingMatches = matches
    .filter(match => match.status === "Upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 2);

  return (
    <Card className="col-span-1 lg:col-span-2 bg-[#0f1729] text-white border-none">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Upcoming Matches</h3>
        </div>
        <div className="space-y-4">
          {upcomingMatches.length === 0 ? (
            <p className="text-center py-4 text-gray-400">No upcoming matches</p>
          ) : (
            upcomingMatches.map(match => (
              <Link 
                key={match.id} 
                to={`/matches/${match.id}`}
                className="block"
              >
                <div className="border border-gray-700 rounded-md p-4 hover:border-cricket-primary hover:bg-[#192338] transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(match.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</span>
                      <Clock className="w-4 h-4 ml-3 mr-1" />
                      <span>{match.time}</span>
                    </div>
                    <div className="text-xs font-medium px-2 py-1 bg-gray-700 rounded-full">
                      {match.matchType}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{match.team1.logo}</div>
                      <div>
                        <p className="font-semibold">{match.team1.name}</p>
                        <p className="text-xs text-gray-400">
                          {match.team1.wins}W - {match.team1.losses}L
                        </p>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-gray-400">VS</div>
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-semibold text-right">{match.team2.name}</p>
                        <p className="text-xs text-gray-400 text-right">
                          {match.team2.wins}W - {match.team2.losses}L
                        </p>
                      </div>
                      <div className="text-2xl">{match.team2.logo}</div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-xs text-gray-400">
                    <MapPin className="w-3 h-3 mr-1" />
                    {match.venue}
                  </div>
                </div>
              </Link>
            ))
          )}
          
          <div className="flex justify-center mt-2">
            <Link 
              to="/matches" 
              className="text-cricket-primary hover:text-cricket-secondary text-sm font-medium"
            >
              View all matches
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingMatches;
