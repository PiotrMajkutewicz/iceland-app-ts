export interface Earthquake {
  timestamp: string;
  latitude: number;
  longitude: number;
  depth: number;
  size: number;
  quality: number;
  humanReadableLocation: string;
}

export type EarthquakeType = "all" | "minor" | "moderate" | "major";
