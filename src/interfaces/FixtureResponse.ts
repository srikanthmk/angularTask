import { ResponseItem } from "./ResponseItem";
export interface FixtureResponse {
    get: string;
    parameters: {
      team: string;
      last: string;
    };
    errors:  {
      time: string;
    bug: string;
    report: string;
    }; 
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: ResponseItem[];
  }