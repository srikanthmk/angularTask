export interface ErrorResponse {
  get: string;
  parameters: any[]; 
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
  response: any[]; 
}