
import { teams, Team } from './teams';

export type MatchStatus = 'Upcoming' | 'Live' | 'Completed';
export type InningStatus = 'Yet to bat' | 'Batting' | 'Completed';

export interface PlayerScore {
  playerId: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  isOut: boolean;
  outMethod?: string;
}

export interface BowlerStats {
  playerId: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

export interface Inning {
  team: Team;
  status: InningStatus;
  totalRuns: number;
  wickets: number;
  overs: number;
  runRate: number;
  battingScores: PlayerScore[];
  bowlingStats: BowlerStats[];
}

export interface Match {
  id: string;
  team1: Team;
  team2: Team;
  venue: string;
  date: string;
  time: string;
  status: MatchStatus;
  inning1?: Inning;
  inning2?: Inning;
  result?: string;
  matchType: 'League' | 'Qualifier' | 'Eliminator' | 'Final';
}

// Sample match data
export const matches: Match[] = [
  {
    id: "m1",
    team1: teams[0], // Royal Challengers
    team2: teams[1], // Super Kings
    venue: "Chinnaswamy Stadium",
    date: "2025-04-10",
    time: "19:30",
    status: "Upcoming",
    matchType: "League"
  },
  {
    id: "m2",
    team1: teams[2], // Knight Riders
    team2: teams[3], // Mumbai Indians
    venue: "Eden Gardens",
    date: "2025-04-12",
    time: "15:30",
    status: "Upcoming",
    matchType: "League"
  },
  {
    id: "m3",
    team1: teams[0], // Royal Challengers
    team2: teams[2], // Knight Riders
    venue: "Chinnaswamy Stadium",
    date: "2025-04-05",
    time: "19:30",
    status: "Live",
    inning1: {
      team: teams[0],
      status: "Completed",
      totalRuns: 187,
      wickets: 4,
      overs: 20,
      runRate: 9.35,
      battingScores: [
        {
          playerId: "p1", // Virat Sharma
          runs: 82,
          balls: 52,
          fours: 8,
          sixes: 4,
          isOut: true,
          outMethod: "c Gautam Roy b Sunil Mishra"
        },
        {
          playerId: "p2", // MS Singh
          runs: 45,
          balls: 28,
          fours: 5,
          sixes: 2,
          isOut: false
        }
      ],
      bowlingStats: [
        {
          playerId: "p8", // Sunil Mishra
          overs: 4,
          maidens: 0,
          runs: 34,
          wickets: 2,
          economy: 8.5
        },
        {
          playerId: "p9", // Andre Russell
          overs: 4,
          maidens: 0,
          runs: 42,
          wickets: 1,
          economy: 10.5
        }
      ]
    },
    inning2: {
      team: teams[2],
      status: "Batting",
      totalRuns: 96,
      wickets: 2,
      overs: 11.2,
      runRate: 8.47,
      battingScores: [
        {
          playerId: "p7", // Gautam Roy
          runs: 54,
          balls: 38,
          fours: 6,
          sixes: 2,
          isOut: false
        },
        {
          playerId: "p8", // Sunil Mishra
          runs: 12,
          balls: 8,
          fours: 1,
          sixes: 0,
          isOut: false
        }
      ],
      bowlingStats: [
        {
          playerId: "p3", // Ravindra Kumar
          overs: 4,
          maidens: 0,
          runs: 28,
          wickets: 2,
          economy: 7.0
        }
      ]
    },
    matchType: "League"
  },
  {
    id: "m4",
    team1: teams[1], // Super Kings
    team2: teams[3], // Mumbai Indians
    venue: "Chepauk Stadium",
    date: "2025-04-02",
    time: "19:30",
    status: "Completed",
    inning1: {
      team: teams[1],
      status: "Completed",
      totalRuns: 172,
      wickets: 6,
      overs: 20,
      runRate: 8.6,
      battingScores: [
        {
          playerId: "p4", // Rohit Patel
          runs: 55,
          balls: 42,
          fours: 4,
          sixes: 3,
          isOut: true,
          outMethod: "b Hardik Raja"
        },
        {
          playerId: "p5", // Jadeja Khan
          runs: 35,
          balls: 20,
          fours: 4,
          sixes: 1,
          isOut: true,
          outMethod: "c Kieron Sharma b Hardik Raja"
        }
      ],
      bowlingStats: [
        {
          playerId: "p10", // Hardik Raja
          overs: 4,
          maidens: 0,
          runs: 32,
          wickets: 3,
          economy: 8.0
        }
      ]
    },
    inning2: {
      team: teams[3],
      status: "Completed",
      totalRuns: 176,
      wickets: 4,
      overs: 19.2,
      runRate: 9.1,
      battingScores: [
        {
          playerId: "p12", // Ishan Desai
          runs: 82,
          balls: 48,
          fours: 7,
          sixes: 5,
          isOut: true,
          outMethod: "b Jadeja Khan"
        },
        {
          playerId: "p10", // Hardik Raja
          runs: 45,
          balls: 22,
          fours: 3,
          sixes: 4,
          isOut: false
        }
      ],
      bowlingStats: [
        {
          playerId: "p5", // Jadeja Khan
          overs: 4,
          maidens: 0,
          runs: 36,
          wickets: 2,
          economy: 9.0
        },
        {
          playerId: "p6", // Bumrah Chauhan
          overs: 4,
          maidens: 0,
          runs: 28,
          wickets: 1,
          economy: 7.0
        }
      ]
    },
    result: "Mumbai Indians won by 6 wickets",
    matchType: "League"
  }
];
