
export interface Player {
  id: string;
  name: string;
  role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicket Keeper';
  battingHand: 'Right' | 'Left';
  bowlingStyle?: string;
  matches: number;
  runs: number;
  wickets: number;
  photo?: string;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  primaryColor: string;
  captain: string;
  players: Player[];
  matches: number;
  wins: number;
  losses: number;
  draws: number;
  points: number;
}

// Sample team data
export const teams: Team[] = [
  {
    id: "t1",
    name: "Royal Challengers",
    shortName: "RCB",
    logo: "🏏",
    primaryColor: "#FF0000",
    captain: "Virat Sharma",
    players: [
      {
        id: "p1",
        name: "Virat Sharma",
        role: "Batsman",
        battingHand: "Right",
        matches: 15,
        runs: 650,
        wickets: 0
      },
      {
        id: "p2",
        name: "MS Singh",
        role: "Wicket Keeper",
        battingHand: "Right",
        matches: 15,
        runs: 425,
        wickets: 0
      },
      {
        id: "p3",
        name: "Ravindra Kumar",
        role: "All-rounder",
        battingHand: "Left",
        bowlingStyle: "Left-arm orthodox",
        matches: 15,
        runs: 235,
        wickets: 18
      }
    ],
    matches: 15,
    wins: 10,
    losses: 4,
    draws: 1,
    points: 21
  },
  {
    id: "t2",
    name: "Super Kings",
    shortName: "CSK",
    logo: "🏏",
    primaryColor: "#FFCC00",
    captain: "Rohit Patel",
    players: [
      {
        id: "p4",
        name: "Rohit Patel",
        role: "Batsman",
        battingHand: "Right",
        matches: 15,
        runs: 580,
        wickets: 0
      },
      {
        id: "p5",
        name: "Jadeja Khan",
        role: "All-rounder",
        battingHand: "Left",
        bowlingStyle: "Left-arm medium",
        matches: 15,
        runs: 320,
        wickets: 16
      },
      {
        id: "p6",
        name: "Bumrah Chauhan",
        role: "Bowler",
        battingHand: "Right",
        bowlingStyle: "Right-arm fast",
        matches: 15,
        runs: 45,
        wickets: 22
      }
    ],
    matches: 15,
    wins: 9,
    losses: 5,
    draws: 1,
    points: 19
  },
  {
    id: "t3",
    name: "Knight Riders",
    shortName: "KKR",
    logo: "🏏",
    primaryColor: "#663399",
    captain: "Gautam Roy",
    players: [
      {
        id: "p7",
        name: "Gautam Roy",
        role: "Batsman",
        battingHand: "Left",
        matches: 15,
        runs: 520,
        wickets: 0
      },
      {
        id: "p8",
        name: "Sunil Mishra",
        role: "All-rounder",
        battingHand: "Right",
        bowlingStyle: "Right-arm off break",
        matches: 15,
        runs: 280,
        wickets: 12
      },
      {
        id: "p9",
        name: "Andre Russell",
        role: "All-rounder",
        battingHand: "Right",
        bowlingStyle: "Right-arm fast-medium",
        matches: 15,
        runs: 340,
        wickets: 14
      }
    ],
    matches: 15,
    wins: 8,
    losses: 6,
    draws: 1,
    points: 17
  },
  {
    id: "t4",
    name: "Mumbai Indians",
    shortName: "MI",
    logo: "🏏",
    primaryColor: "#0066CC",
    captain: "Hardik Raja",
    players: [
      {
        id: "p10",
        name: "Hardik Raja",
        role: "All-rounder",
        battingHand: "Right",
        bowlingStyle: "Right-arm medium-fast",
        matches: 15,
        runs: 420,
        wickets: 15
      },
      {
        id: "p11",
        name: "Kieron Sharma",
        role: "All-rounder",
        battingHand: "Left",
        bowlingStyle: "Right-arm medium",
        matches: 15,
        runs: 400,
        wickets: 8
      },
      {
        id: "p12",
        name: "Ishan Desai",
        role: "Wicket Keeper",
        battingHand: "Left",
        matches: 15,
        runs: 480,
        wickets: 0
      }
    ],
    matches: 15,
    wins: 7,
    losses: 7,
    draws: 1,
    points: 15
  }
];
