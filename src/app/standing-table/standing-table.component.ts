import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandingService } from '../standing.service';
import { Standing } from 'src/interfaces/Standing';


@Component({
  selector: 'app-standing-table',
  templateUrl: './standing-table.component.html',
  styleUrls: ['./standing-table.component.css']
})
export class StandingTableComponent implements OnInit {

  standings: Standing [] = [];
  leagueId!: string ;

  constructor(private route: ActivatedRoute, private standingService: StandingService) {
    this.standings = [];
    this.leagueId = '';
  }
  
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.leagueId = data['leagueId'];
      this.loadStandings();
    });
  }

  loadStandings() {
    if (this.leagueId) {
      this.standingService.getStandings(this.leagueId).subscribe((data) => {
        this.standings = data.response[0].league.standings[0];
        this.standings.sort((a, b) => b.points - a.points);
        this.standings = this.standings.slice(0, 10);
      });
    }
  }
}
