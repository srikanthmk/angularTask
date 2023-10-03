import { Fixture } from "./Fixture";
import { Goals } from "./Goals";
import { League } from "./League";
import { Score } from "./Score";
import { Team } from "./Team";

export interface ResponseItem {
  fixture: Fixture;
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
  goals: Goals;
  score: Score;
}