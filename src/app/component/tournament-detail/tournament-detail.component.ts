import { Component, OnInit } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet, Router, RouterModule, ActivatedRoute
} from '@angular/router';
import { TournamentApiService } from '../../tournament-api.service';

@Component({
  selector: 'app-tournament-detail',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './tournament-detail.component.html'
})
export class TournamentDetailComponent {
  matchs: any[] = [];
  tournamentId: string = '';

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentApiService
  ) { }
  ngOnInit(): void {
    this.getMatch();
  }
  getMatch(){
    this.tournamentId = this.route.snapshot.params['tournamentId'];
    console.log("detail match");
    this.tournamentService.getDetail(this.tournamentId).subscribe((data: any[]) => {
      this.matchs = data;
    });
  }
}
