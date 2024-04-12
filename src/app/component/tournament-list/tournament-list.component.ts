import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet, Router,RouterModule
} from '@angular/router';
import { TournamentApiService } from '../../tournament-api.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  standalone: true,
  imports: [ CommonModule, RouterModule, RouterLink,RouterLinkActive,RouterOutlet]
})

export class TournamentListComponent implements OnInit {
  tournaments: any[] = [];

  constructor(
    private router: Router,
    private tournamentService: TournamentApiService
  ) { }

  ngOnInit(): void {
    this.getTournaments();
  }

  getTournaments() {
    console.log("Liste des tournois")
    this.tournamentService.getTournaments().subscribe((data: any[]) => {
      this.tournaments = data;
    });
  }

  register(tournamentId: string) {
    console.log("ouverture inscription")
    this.router.navigate(['player-registration/', tournamentId]);
  }

  unregister(tournamentId: string) {
    console.log("ouverture désinscription")
    this.router.navigate(['player-unregistration/', tournamentId]);
  }

  launch(tournamentId: string) {
  console.log("lancement du tournoi")
    this.tournamentService.launchTournament(tournamentId)
  }

  close(tournamentId: string) {
  this.router.navigate(['close-tournament/',tournamentId]);
  }
  detail(tournamentId: string) {
    this.router.navigate(['tournament/', tournamentId]);
  }
}
