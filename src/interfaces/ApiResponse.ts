import { League } from "./League";

export interface ApiResponse {
    get: string;
    parameters: {
      league: string;
      season: string;
    };
    errors: {
      time: string;
    bug: string;
    report: string;
    };
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: League[];
  }