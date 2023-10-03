import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StandingService {

   private standingsApiUrl = 'https://v3.football.api-sports.io/standings'; 
   private fixterApiUrl = 'https://v3.football.api-sports.io/fixtures';

   constructor(private http: HttpClient) {}

   currentDate = new Date();
   currentYear = this.currentDate.getFullYear();

   getStandings(leagueId: string): Observable<any> {
     const headers = new HttpHeaders({
       "x-rapidapi-host": "v3.football.api-sports.io",
       "x-rapidapi-key": "679b718a556feec5b9c5cd3441e679be"
     });
     const queryParam = `?league=${leagueId}&season=${this.currentYear}`
     const url = `${this.standingsApiUrl}${queryParam}`;
     return this.http.get(url, { headers }).pipe(
       catchError(this.handleError)
     );
   }

   getTeamsLastPlayed(team: number): Observable<any> {
     const headers = new HttpHeaders({
       "x-rapidapi-host": "v3.football.api-sports.io",
       "x-rapidapi-key": "679b718a556feec5b9c5cd3441e679be"
     });
     const queryParam = `?team=${team}&last=10&season=${this.currentYear}`
     const url = `${this.fixterApiUrl}${queryParam}`;
     return this.http.get(url, { headers }).pipe(
       catchError(this.handleError)
     );
   }

   private handleError(error: HttpErrorResponse) {
     console.error('An error occurred:', error);
     return throwError('Something went wrong, please try again later.');
   }
}
