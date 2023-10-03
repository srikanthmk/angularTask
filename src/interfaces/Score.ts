import { Goals } from "./Goals";

export interface Score {
    halftime: Goals;
    fulltime: Goals;
    extratime: Goals | null;
    penalty: Goals | null;
  }