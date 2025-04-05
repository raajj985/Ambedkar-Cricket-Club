
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format overs (e.g., 4.3 means 4 overs and 3 balls)
export function formatOvers(overs: number): string {
  const fullOvers = Math.floor(overs);
  const balls = Math.round((overs - fullOvers) * 10);
  return `${fullOvers}.${balls}`;
}

// Calculate economy rate
export function calculateEconomy(runs: number, overs: number): string {
  if (overs === 0) return "0.00";
  return (runs / overs).toFixed(2);
}

// Calculate strike rate
export function calculateStrikeRate(runs: number, balls: number): string {
  if (balls === 0) return "0.00";
  return ((runs / balls) * 100).toFixed(2);
}

// Get batsman status text
export function getBatsmanStatus(isOut: boolean, outMethod?: string): string {
  if (!isOut) return "not out";
  return outMethod || "out";
}

// Format match date
export function formatMatchDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
