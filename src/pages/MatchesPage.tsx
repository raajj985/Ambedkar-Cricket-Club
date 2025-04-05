
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { matches } from "@/data/matches";
import { MapPin, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { formatOvers } from "@/lib/utils";

const MatchesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "live" | "completed">("upcoming");
  
  const upcomingMatches = matches
    .filter(match => match.status === "Upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
  const liveMatches = matches.filter(match => match.status === "Live");
  
  const completedMatches = matches
    .filter(match => match.status === "Completed")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Matches</h1>
      
      <Tabs defaultValue="upcoming" value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="live">Live</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <div className="space-y-4">
            {upcomingMatches.length === 0 ? (
              <p className="text-center py-8 text-gray-500">No upcoming matches</p>
            ) : (
              upcomingMatches.map(match => (
                <Link key={match.id} to={`/matches/${match.id}`}>
                  <div className="border rounded-lg p-4 hover:border-cricket-primary hover:shadow-sm transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(match.date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                        <Clock className="w-4 h-4 ml-3 mr-1" />
                        <span>{match.time}</span>
                      </div>
                      <div className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                        {match.matchType}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{match.team1.logo}</div>
                        <div>
                          <p className="font-semibold">{match.team1.name}</p>
                          <p className="text-xs text-gray-500">
                            {match.team1.wins}W - {match.team1.losses}L
                          </p>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-gray-400">VS</div>
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="font-semibold text-right">{match.team2.name}</p>
                          <p className="text-xs text-gray-500 text-right">
                            {match.team2.wins}W - {match.team2.losses}L
                          </p>
                        </div>
                        <div className="text-2xl">{match.team2.logo}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-4 text-xs text-gray-500">
                      <MapPin className="w-3 h-3 mr-1" />
                      {match.venue}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="live">
          <div className="space-y-4">
            {liveMatches.length === 0 ? (
              <p className="text-center py-8 text-gray-500">No live matches at the moment</p>
            ) : (
              liveMatches.map(match => (
                <Link key={match.id} to={`/matches/${match.id}`}>
                  <div className="border-2 border-cricket-primary rounded-lg p-4 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(match.date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
                      </div>
                      <div className="text-xs font-medium px-2 py-1 bg-cricket-primary text-white rounded-full animate-pulse">
                        LIVE
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{match.team1.logo}</div>
                        <div>
                          <p className="font-semibold">{match.team1.name}</p>
                          {match.inning1 && (
                            <p className="text-sm">
                              {match.inning1.totalRuns}/{match.inning1.wickets} 
                              <span className="text-xs text-gray-500 ml-1">
                                ({formatOvers(match.inning1.overs)} ov)
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-sm font-bold text-gray-400">VS</div>
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="font-semibold text-right">{match.team2.name}</p>
                          {match.inning2 && (
                            <p className="text-sm text-right">
                              {match.inning2.totalRuns}/{match.inning2.wickets}
                              <span className="text-xs text-gray-500 ml-1">
                                ({formatOvers(match.inning2.overs)} ov)
                              </span>
                            </p>
                          )}
                        </div>
                        <div className="text-2xl">{match.team2.logo}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-4 text-xs text-gray-500">
                      <MapPin className="w-3 h-3 mr-1" />
                      {match.venue}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="completed">
          <div className="space-y-4">
            {completedMatches.length === 0 ? (
              <p className="text-center py-8 text-gray-500">No completed matches yet</p>
            ) : (
              completedMatches.map(match => (
                <Link key={match.id} to={`/matches/${match.id}`}>
                  <div className="border rounded-lg p-4 hover:border-cricket-primary hover:shadow-sm transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(match.date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
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
                          <span className="text-xs text-gray-500 ml-1">
                            ({formatOvers(match.inning1?.overs || 0)} ov)
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-xl">{match.team2.logo}</div>
                          <div className="text-sm font-medium">{match.team2.name}</div>
                        </div>
                        <div className="text-sm">
                          {match.inning2?.totalRuns || 0}/{match.inning2?.wickets || 0}
                          <span className="text-xs text-gray-500 ml-1">
                            ({formatOvers(match.inning2?.overs || 0)} ov)
                          </span>
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
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MatchesPage;
