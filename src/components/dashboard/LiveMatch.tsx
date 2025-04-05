
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { matches } from "@/data/matches";
import { Link } from "react-router-dom";
import { formatOvers } from "@/lib/utils";

const LiveMatch: React.FC = () => {
  // Find live match
  const liveMatch = matches.find(match => match.status === "Live");

  if (!liveMatch) {
    return (
      <Card className="col-span-1 lg:col-span-2 bg-[#0f1729] text-white border-none">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Live Match</h3>
          </div>
          <div className="flex items-center justify-center h-40">
            <p className="text-gray-400">No live matches at the moment</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentInning = liveMatch.inning2?.status === "Batting" 
    ? liveMatch.inning2 
    : liveMatch.inning1;
  
  const previousInning = liveMatch.inning2?.status === "Batting" 
    ? liveMatch.inning1 
    : null;

  if (!currentInning) {
    return null;
  }

  // Find current batsmen
  const activeBatsmen = currentInning.battingScores
    .filter(score => !score.isOut)
    .slice(0, 2);

  return (
    <Card className="col-span-1 lg:col-span-2 overflow-hidden border-none">
      <div className="bg-cricket-primary text-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Live Match</h3>
          <div className="px-2 py-1 bg-white bg-opacity-20 rounded text-xs font-medium animate-pulse">
            LIVE
          </div>
        </div>
      </div>
      <CardContent className="p-0 bg-[#0f1729] text-white">
        <div className="p-4 bg-[#1E293B] bg-opacity-30 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{liveMatch.team1.logo}</div>
              <div>
                <p className="font-semibold">{liveMatch.team1.name}</p>
                {liveMatch.inning1 && (
                  <p className="text-sm">
                    {liveMatch.inning1.totalRuns}/{liveMatch.inning1.wickets} 
                    <span className="text-xs text-gray-400 ml-1">
                      ({formatOvers(liveMatch.inning1.overs)} ov)
                    </span>
                  </p>
                )}
              </div>
            </div>
            <div className="text-sm font-bold text-gray-400">VS</div>
            <div className="flex items-center space-x-3">
              <div>
                <p className="font-semibold text-right">{liveMatch.team2.name}</p>
                {liveMatch.inning2 && (
                  <p className="text-sm text-right">
                    {liveMatch.inning2.totalRuns}/{liveMatch.inning2.wickets}
                    <span className="text-xs text-gray-400 ml-1">
                      ({formatOvers(liveMatch.inning2.overs)} ov)
                    </span>
                  </p>
                )}
              </div>
              <div className="text-2xl">{liveMatch.team2.logo}</div>
            </div>
          </div>
          
          {previousInning && (
            <div className="mt-3 text-sm">
              <span className="font-medium">{currentInning.team.name}</span> need{' '}
              <span className="font-medium">
                {previousInning.totalRuns + 1 - currentInning.totalRuns}
              </span>{' '}
              runs in{' '}
              <span className="font-medium">
                {Math.floor((20 - currentInning.overs) * 6)} balls
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between border-b border-gray-700 pb-2 mb-3 text-sm font-medium">
            <div>Batsman</div>
            <div className="flex space-x-4">
              <div className="w-8 text-center">R</div>
              <div className="w-8 text-center">B</div>
              <div className="w-8 text-center">4s</div>
              <div className="w-8 text-center">6s</div>
              <div className="w-8 text-center">SR</div>
            </div>
          </div>
          
          {activeBatsmen.map((batsman, index) => {
            const player = currentInning.team.players.find(p => p.id === batsman.playerId);
            const strikeRate = batsman.balls > 0 
              ? ((batsman.runs / batsman.balls) * 100).toFixed(1) 
              : "0.0";
              
            return (
              <div key={batsman.playerId} className="flex justify-between py-2 text-sm">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${index === 0 ? 'bg-cricket-primary' : 'bg-gray-600'}`} />
                  <div>{player?.name || 'Unknown Player'}</div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-8 text-center font-medium">{batsman.runs}</div>
                  <div className="w-8 text-center">{batsman.balls}</div>
                  <div className="w-8 text-center">{batsman.fours}</div>
                  <div className="w-8 text-center">{batsman.sixes}</div>
                  <div className="w-8 text-center">{strikeRate}</div>
                </div>
              </div>
            );
          })}
          
          <div className="mt-4 pt-2 border-t border-gray-700">
            <div className="flex justify-between text-sm">
              <div>Current Run Rate:</div>
              <div className="font-medium">{currentInning.runRate.toFixed(2)}</div>
            </div>
            {previousInning && (
              <div className="flex justify-between text-sm mt-1">
                <div>Required Run Rate:</div>
                <div className="font-medium">
                  {currentInning.overs < 20 
                    ? (((previousInning.totalRuns + 1 - currentInning.totalRuns) / 
                       ((20 - currentInning.overs)))).toFixed(2)
                    : "0.00"
                  }
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4 text-center">
            <Link 
              to={`/matches/${liveMatch.id}`} 
              className="text-cricket-primary hover:text-cricket-secondary text-sm font-medium"
            >
              View full scorecard
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveMatch;
