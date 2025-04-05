
import React from "react";
import TournamentStats from "@/components/dashboard/TournamentStats";
import LiveMatch from "@/components/dashboard/LiveMatch";
import UpcomingMatches from "@/components/dashboard/UpcomingMatches";
import TeamStandings from "@/components/dashboard/TeamStandings";
import RecentResults from "@/components/dashboard/RecentResults";

const Index: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Tournament Dashboard</h1>
      
      <TournamentStats />
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-4">
        <LiveMatch />
        <UpcomingMatches />
      </div>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <TeamStandings />
        <RecentResults />
      </div>
    </div>
  );
};

export default Index;
