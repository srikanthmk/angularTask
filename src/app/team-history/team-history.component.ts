import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandingService } from '../standing.service';
import { FixtureResponse } from '../interfaces/FixtureResponse';
import { Location } from '@angular/common';
@Component({
  selector: 'app-team-history',
  templateUrl: './team-history.component.html',
  styleUrls: ['./team-history.component.css'],
})
export class TeamHistoryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private standingService: StandingService,
    private location: Location
  ) {}
  teamId!: number;
  fixtureResponse!: FixtureResponse;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teamId = params['id'];
      this.getTeamHistory();
    });
  }
  getTeamHistory() {
    this.standingService.getTeamsLastPlayed(this.teamId).subscribe((data) => {
      console.log(data);
      this.fixtureResponse = data;
    });
  }
  goBack() {
    this.location.back();
  }
}
